import { expect, test, type Page } from '@playwright/test';

function skipMobileSafari(testInfo: { project: { name: string } }) {
  test.skip(
    testInfo.project.name === 'Mobile Safari',
    'Mobile Safari keeps layout coverage here; deep booking interaction is covered in desktop WebKit and Mobile Chrome.'
  );
}

async function stubBookedSlots(page: Page) {
  await page.route(/\/api\/bookings\?.*/, async (route) => {
    if (route.request().method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ bookedSlots: [] }),
      });
      return;
    }

    await route.continue();
  });
}

async function stubCsrf(page: Page) {
  await page.route('**/api/csrf', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ token: 'e2e-csrf-token' }),
    });
  });
}

function ordinalSuffix(day: number) {
  if (day >= 11 && day <= 13) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function nextBookableDateButtonName() {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();

  return `${weekday}, ${month} ${day}${ordinalSuffix(day)}, ${year}`;
}

async function fillBookingDraft(page: Page) {
  await page.locator('form#booking-embed select').selectOption({ label: 'Skin Consultation — 45 min' });
  await page.getByPlaceholder('Enter your full name').fill('E2E Test Client');
  await page.getByPlaceholder('+995 577 34 57 67').fill('+995 577 28 68 55');
  await page.getByPlaceholder('your@email.com').fill('e2e@example.com');

  await page.getByRole('button', { name: nextBookableDateButtonName() }).click();
  await expect(page.locator('input[name="preferredDate"]')).not.toHaveValue('');
  const timeSlotButton = page.getByTestId('booking-time-slot').first();
  await expect(timeSlotButton).toBeVisible();
  await timeSlotButton.click();
}

test.describe('Booking Page', () => {
  test.beforeEach(async ({ page }) => {
    await stubCsrf(page);
    await stubBookedSlots(page);
    await page.goto('/en/book');
    await page.waitForLoadState('networkidle');
  });

  test('loads the booking page from the current direct booking route', async ({ page }) => {
    await expect(page).toHaveTitle(/Book an Appointment/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Book');
    await expect(page.locator('form#booking-embed')).toBeVisible();
  });

  test('booking form has the required customer fields', async ({ page }) => {
    const form = page.locator('form#booking-embed');

    await expect(form.getByLabel('Select Service')).toBeVisible();
    await expect(form.getByLabel('Full Name')).toBeVisible();
    await expect(form.getByLabel('Phone Number')).toBeVisible();
    await expect(form.getByLabel('Email Address')).toBeVisible();
    await expect(form.getByText('Preferred Date')).toBeVisible();
    await expect(form.getByText('Preferred Time')).toBeVisible();
  });

  test('keeps submit disabled until required fields are complete', async ({ page }, testInfo) => {
    skipMobileSafari(testInfo);

    const submitButton = page.getByRole('button', { name: 'Request Booking' });

    await expect(submitButton).toBeDisabled();

    await fillBookingDraft(page);

    await expect(submitButton).toBeEnabled();
  });

  test('can select a consultation service', async ({ page }) => {
    const serviceSelect = page.locator('form#booking-embed select');

    await serviceSelect.selectOption({ label: 'Skin Consultation — 45 min' });

    await expect(serviceSelect).toHaveValue('Skin Consultation');
  });

  test('can select a date and time without creating a booking', async ({ page }, testInfo) => {
    skipMobileSafari(testInfo);

    await page.getByRole('button', { name: nextBookableDateButtonName() }).click();
    await expect(page.locator('input[name="preferredDate"]')).not.toHaveValue('');
    const timeSlotButton = page.getByTestId('booking-time-slot').first();
    await expect(timeSlotButton).toBeVisible();
    const selectedTime = (await timeSlotButton.getAttribute('data-value')) || '';
    await timeSlotButton.click();

    await expect(page.locator('input[name="preferredDate"]')).not.toHaveValue('');
    await expect(page.locator('input[name="preferredTime"]')).toHaveValue(selectedTime);
  });

  test('shows success after a mocked booking submission', async ({ page }, testInfo) => {
    skipMobileSafari(testInfo);

    await page.route('**/api/bookings', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify({
            id: 'booking-e2e',
            name: 'E2E Test Client',
            email: 'e2e@example.com',
            phone: '+995 577 28 68 55',
            service: 'Skin Consultation',
            date: '2026-06-15T00:00:00.000Z',
            timeSlot: '10:00 - 11:00',
            message: null,
            status: 'PENDING',
          }),
        });
        return;
      }

      await route.continue();
    });

    await fillBookingDraft(page);

    const submitButton = page.getByRole('button', { name: 'Request Booking' });
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    await expect(page.getByText('Booking Request Submitted')).toBeVisible();
  });
});

test.describe('Mobile Booking', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('booking page is responsive on mobile', async ({ page }) => {
    await stubCsrf(page);
    await stubBookedSlots(page);
    await page.goto('/en/book');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('form#booking-embed')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Book');

    const overflowX = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflowX).toBeLessThanOrEqual(1);
  });
});
