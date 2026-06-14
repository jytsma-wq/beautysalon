import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  deleteBookingById: vi.fn(),
  isDashboardAuthenticated: vi.fn(),
  redirect: vi.fn((url: string) => {
    const error = new Error('NEXT_REDIRECT') as Error & { digest: string };
    error.digest = `NEXT_REDIRECT;replace;${url};303;`;
    throw error;
  }),
  revalidatePath: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  redirect: mocks.redirect,
}));

vi.mock('next/cache', () => ({
  revalidatePath: mocks.revalidatePath,
}));

vi.mock('@/lib/dashboard-auth', () => ({
  clearDashboardSessionCookie: vi.fn(),
  getDashboardPasswordFromEnv: vi.fn(),
  isDashboardAuthenticated: mocks.isDashboardAuthenticated,
  isValidDashboardPassword: vi.fn(),
  setDashboardSessionCookie: vi.fn(),
}));

vi.mock('@/lib/booking-store', () => ({
  deleteBookingById: mocks.deleteBookingById,
}));

import { deleteDashboardBooking } from '../actions';

function deleteFormData(overrides: { id?: string; locale?: string } = {}): FormData {
  const formData = new FormData();
  formData.set('bookingId', overrides.id ?? 'booking-1');
  formData.set('locale', overrides.locale ?? 'en');
  return formData;
}

describe('dashboard actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.isDashboardAuthenticated.mockResolvedValue(true);
    mocks.deleteBookingById.mockResolvedValue(true);
  });

  it('does not delete appointments when the dashboard session is missing', async () => {
    mocks.isDashboardAuthenticated.mockResolvedValue(false);

    await expect(deleteDashboardBooking(deleteFormData())).rejects.toThrow('NEXT_REDIRECT');

    expect(mocks.deleteBookingById).not.toHaveBeenCalled();
    expect(mocks.redirect).toHaveBeenCalledWith('/en/dashboard?error=unauthorized');
  });

  it('deletes an appointment and refreshes the dashboard when authenticated', async () => {
    await expect(deleteDashboardBooking(deleteFormData())).rejects.toThrow('NEXT_REDIRECT');

    expect(mocks.deleteBookingById).toHaveBeenCalledWith('booking-1');
    expect(mocks.revalidatePath).toHaveBeenCalledWith('/en/dashboard');
    expect(mocks.redirect).toHaveBeenCalledWith('/en/dashboard?deleted=1');
  });
});
