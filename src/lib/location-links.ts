import { siteConfig } from '@/data/site-config';

export function getBusinessAddress() {
  const { address, city, country } = siteConfig.contact;

  return {
    streetAddress: address,
    locality: city,
    country,
    fullAddress: `${address}, ${city}, ${country}`,
  };
}

export function getGoogleMapsDirectionsUrl(destination = getBusinessAddress().fullAddress) {
  const searchParams = new URLSearchParams({
    api: '1',
    destination,
    travelmode: 'driving',
  });

  return `https://www.google.com/maps/dir/?${searchParams.toString()}`;
}

export function getGoogleMapsEmbedUrl(query = getBusinessAddress().fullAddress) {
  const searchParams = new URLSearchParams({
    q: query,
    output: 'embed',
  });

  return `https://www.google.com/maps?${searchParams.toString()}`;
}
