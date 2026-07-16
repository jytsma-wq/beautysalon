import { siteConfig } from '@/data/site-config';

const businessHourDates = {
  monday: new Date(Date.UTC(2024, 0, 1)),
  tuesday: new Date(Date.UTC(2024, 0, 2)),
  wednesday: new Date(Date.UTC(2024, 0, 3)),
  thursday: new Date(Date.UTC(2024, 0, 4)),
  friday: new Date(Date.UTC(2024, 0, 5)),
  saturday: new Date(Date.UTC(2024, 0, 6)),
  sunday: new Date(Date.UTC(2024, 0, 7)),
} as const;

export function getLocalizedBusinessHours(locale: string) {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    timeZone: 'UTC',
  });

  return Object.entries(businessHourDates).map(([key, date]) => ({
    key,
    day: formatter.format(date),
    hours: siteConfig.businessHours[key as keyof typeof siteConfig.businessHours],
  }));
}
