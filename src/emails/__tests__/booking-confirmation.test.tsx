import { render } from '@react-email/render';
import { describe, expect, it } from 'vitest';
import { BookingConfirmationEmail } from '../booking-confirmation';

describe('BookingConfirmationEmail', () => {
  it('renders the owner-confirmed postal code in the default clinic address', async () => {
    const html = await render(
      <BookingConfirmationEmail
        patientName="Test Client"
        service="Consultation"
        date="2026-07-05"
        time="10:00"
      />
    );

    expect(html).toContain('Zurab Gorgiladze 63, Batumi 6010, Georgia');
    expect(html).not.toContain('Batumi 6000');
    expect(html).not.toContain('+995 599 123 456');
  });
});
