import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads the English homepage with the current branded header and hero', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(/Silk Beauty Salon/);
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Silk Beauty Salon');
    await expect(page.getByRole('link', { name: 'Silk Beauty Salon' }).first()).toBeVisible();
    await expect(page.locator('a[href="/en/book"]:visible').first()).toBeVisible();
  });

  test('loads supported localized homepages without placeholder text', async ({ page }) => {
    const locales = ['ka', 'ru', 'tr', 'ar', 'he'] as const;

    for (const locale of locales) {
      await page.goto(`/${locale}`, { waitUntil: 'domcontentloaded' });

      await expect(page).toHaveTitle(/Silk Beauty Salon/);
      await expect(page.getByRole('heading', { level: 1 })).toContainText('Silk Beauty Salon');
      await expect(page.locator('body')).not.toContainText('????????');
    }
  });

  test('shows main navigation and language switcher', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'domcontentloaded' });

    await expect(page.getByTestId('language-switcher')).toBeVisible();

    if ((page.viewportSize()?.width ?? 1280) < 1024) {
      return;
    }

    const mainNav = page.getByRole('navigation', { name: 'Main navigation' });

    await expect(mainNav).toBeVisible();
    await expect(mainNav.getByRole('link', { name: 'Price List' })).toBeVisible();
    await expect(mainNav.getByRole('link', { name: 'Offers' })).toBeVisible();
  });

  test('keeps the logo link on the localized homepage', async ({ page }) => {
    await page.goto('/en/contact-us', { waitUntil: 'domcontentloaded' });

    await page.getByRole('link', { name: 'Silk Beauty Salon' }).first().click();

    await expect(page).toHaveURL(/\/en\/?$/);
  });

  test('renders the mobile homepage without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Book' }).first()).toBeVisible();

    const overflowX = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflowX).toBeLessThanOrEqual(1);
  });
});
