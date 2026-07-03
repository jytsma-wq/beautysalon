import { describe, expect, it } from 'vitest';
import type { Testimonial } from '../testimonials';
import {
  formatTestimonialDate,
  getTestimonialDisplayName,
  getTestimonialQuote,
  getTestimonialViewModel,
  testimonials,
} from '../testimonials';

describe('testimonial credibility metadata', () => {
  it('keeps author display privacy-safe', () => {
    expect(getTestimonialDisplayName('Sarah Mitchell')).toBe('Sarah M.');
    expect(getTestimonialDisplayName('Anna K.')).toBe('Anna K.');
    expect(getTestimonialDisplayName('Mariam')).toBe('Mariam');
  });

  it('builds avatar metadata when a client photo is present', () => {
    const testimonial: Testimonial = {
      quote: 'Helpful consultation and clear aftercare.',
      author: 'Sarah Mitchell',
      avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80',
    };

    const viewModel = getTestimonialViewModel(testimonial, 'en');

    expect(viewModel.avatarUrl).toBe(testimonial.avatarUrl);
    expect(viewModel.displayName).toBe('Sarah M.');
    expect(viewModel.initials).toBe('SM');
  });

  it('falls back to initials when no client photo is present', () => {
    const testimonial: Testimonial = {
      quote: 'Natural result and calm service.',
      author: 'Anna K.',
    };

    const viewModel = getTestimonialViewModel(testimonial, 'en');

    expect(viewModel.avatarUrl).toBeUndefined();
    expect(viewModel.initials).toBe('AK');
  });

  it('includes treatment and month/year metadata when available', () => {
    const testimonial: Testimonial = {
      quote: 'The treatment plan was very clear.',
      author: 'Lela S.',
      treatmentType: 'SkinPen microneedling',
      reviewDate: '2026-04',
    };

    const viewModel = getTestimonialViewModel(testimonial, 'en');

    expect(formatTestimonialDate(testimonial.reviewDate, 'en')).toBe('April 2026');
    expect(viewModel.detailLabel).toBe('SkinPen microneedling - April 2026');
  });

  it('handles missing optional fields without crashing', () => {
    const testimonial: Testimonial = {
      quote: 'Professional and careful.',
      author: '',
    };

    const viewModel = getTestimonialViewModel(testimonial, 'en');

    expect(viewModel.quote).toBe(testimonial.quote);
    expect(viewModel.displayName).toBe('Client');
    expect(viewModel.initials).toBe('C');
    expect(viewModel.rating).toBe(5);
    expect(viewModel.detailLabel).toBeUndefined();
  });

  it('supports locale-specific quote overrides when approved translations exist', () => {
    const testimonial: Testimonial = {
      quote: 'Original English quote.',
      quoteByLocale: {
        ka: 'Approved localized quote.',
      },
      author: 'Nino K.',
    };

    expect(getTestimonialQuote(testimonial, 'ka')).toBe('Approved localized quote.');
    expect(getTestimonialQuote(testimonial, 'ru')).toBe('Original English quote.');
  });

  it('does not require invented photos or dates for existing testimonials', () => {
    expect(testimonials).toHaveLength(8);
    expect(testimonials.every((testimonial) => testimonial.avatarUrl === undefined)).toBe(true);
    expect(testimonials.every((testimonial) => testimonial.reviewDate === undefined)).toBe(true);
    expect(testimonials.some((testimonial) => testimonial.treatmentType)).toBe(true);
  });
});
