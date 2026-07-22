import { describe, expect, it } from 'vitest';
import {
  getInventoryByArea,
  salonProductInventory,
  salonProductVerificationFields,
} from '../salon-product-inventory';

describe('salon product inventory', () => {
  it('starts every exact Silk brand as staff-confirmation required', () => {
    expect(salonProductInventory.length).toBeGreaterThan(35);
    expect(
      salonProductInventory.every(
        (item) =>
          item.exactSalonBrand === null &&
          item.staffStatus === 'confirmation-required' &&
          item.publicClaimAllowed === false &&
          item.verification === null
      )
    ).toBe(true);
  });

  it('covers every salon department before staff verification', () => {
    for (const area of [
      'Injectables',
      'SkinPen',
      'Fire & Ice',
      'Nails',
      'Lashes',
      'Hair',
      'Hygiene and safety',
    ] as const) {
      expect(getInventoryByArea(area).length).toBeGreaterThan(0);
    }
  });

  it('requires traceability and public-claim approval', () => {
    expect(salonProductVerificationFields).toContain('Supplier and latest invoice');
    expect(salonProductVerificationFields).toContain(
      'Current batch or lot number and expiry date'
    );
    expect(salonProductVerificationFields).toContain(
      'Whether the product name may be shown publicly and answered by the chatbot'
    );
  });
});
