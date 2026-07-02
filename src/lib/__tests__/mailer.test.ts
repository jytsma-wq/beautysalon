import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  createTransport: vi.fn(),
  transportSendMail: vi.fn(),
}));

vi.mock('nodemailer', () => ({
  default: {
    createTransport: mocks.createTransport,
  },
  createTransport: mocks.createTransport,
}));

describe('sendMail', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();

    delete process.env.SMTP_HOST;
    delete process.env.SMTP_PORT;
    delete process.env.SMTP_SECURE;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASSWORD;
    delete process.env.SMTP_PASSWORD_B64;
    delete process.env.SMTP_FROM;

    mocks.createTransport.mockReturnValue({
      sendMail: mocks.transportSendMail,
    });
    mocks.transportSendMail.mockResolvedValue({});
  });

  it('skips delivery when no SMTP password is configured', async () => {
    const { sendMail } = await import('../mailer');

    const result = await sendMail({
      to: 'client@example.com',
      subject: 'Test',
      html: '<p>Hello</p>',
    });

    expect(result).toEqual({ skipped: true });
    expect(mocks.createTransport).not.toHaveBeenCalled();
  });

  it('uses SMTP_PASSWORD_B64 before the raw SMTP password', async () => {
    process.env.SMTP_USER = 'info@silkbeautysalon.online';
    process.env.SMTP_PASSWORD = 'wrong-runtime-password';
    process.env.SMTP_PASSWORD_B64 = Buffer.from('real-hostinger-password', 'utf8').toString('base64');

    const { sendMail } = await import('../mailer');

    await sendMail({
      to: 'client@example.com',
      subject: 'Test',
      html: '<p>Hello</p>',
    });

    expect(mocks.createTransport).toHaveBeenCalledWith({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@silkbeautysalon.online',
        pass: 'real-hostinger-password',
      },
    });
  });
});
