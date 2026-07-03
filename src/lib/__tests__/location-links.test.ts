import { describe, expect, it } from 'vitest';
import { siteConfig } from '@/data/site-config';
import {
  getBusinessAddress,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
} from '../location-links';

describe('location links', () => {
  it('builds the public business address from shared site config', () => {
    expect(getBusinessAddress()).toEqual({
      streetAddress: siteConfig.contact.address,
      locality: siteConfig.contact.city,
      country: siteConfig.contact.country,
      fullAddress: 'Zurab Gorgiladze 63, Batumi, Georgia',
    });
  });

  it('builds a Google Maps directions URL without API keys', () => {
    const directionsUrl = new URL(getGoogleMapsDirectionsUrl());

    expect(directionsUrl.origin).toBe('https://www.google.com');
    expect(directionsUrl.pathname).toBe('/maps/dir/');
    expect(directionsUrl.searchParams.get('api')).toBe('1');
    expect(directionsUrl.searchParams.get('destination')).toBe('Zurab Gorgiladze 63, Batumi, Georgia');
    expect(directionsUrl.searchParams.get('travelmode')).toBe('driving');
    expect(directionsUrl.search).not.toContain('key=');
  });

  it('builds a lightweight Google Maps embed URL without API keys', () => {
    const embedUrl = new URL(getGoogleMapsEmbedUrl());

    expect(embedUrl.origin).toBe('https://www.google.com');
    expect(embedUrl.pathname).toBe('/maps');
    expect(embedUrl.searchParams.get('q')).toBe('Zurab Gorgiladze 63, Batumi, Georgia');
    expect(embedUrl.searchParams.get('output')).toBe('embed');
    expect(embedUrl.search).not.toContain('key=');
  });
});
