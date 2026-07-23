import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('blog internal links', () => {
  it('links the Botox and fillers guide to the local Botox Batumi page', () => {
    const source = fs.readFileSync(path.join(process.cwd(), 'src/data/blog.ts'), 'utf8');

    expect(source).toContain("slug: 'botox-fillers-batumi-consultation-guide'");
    expect(source).toContain('href="/en/botox-batumi">Botox in Batumi page</a>');
  });

  it('publishes one detailed appointment guide from the chatbot knowledge source', () => {
    const source = fs.readFileSync(path.join(process.cwd(), 'src/data/blog.ts'), 'utf8');

    expect(source).toContain("slug: 'silk-beauty-salon-appointment-guide'");
    expect(source).toContain('treatmentPlanningKnowledge[slug]');
    expect(source).toContain('appointmentPolicies.cancellationNoticeHours');
    expect(source).toContain('Consultation / Not sure what to book');
  });

  it('publishes the product library from product evidence records', () => {
    const source = fs.readFileSync(path.join(process.cwd(), 'src/data/blog.ts'), 'utf8');

    expect(source).toContain(
      "slug: 'products-medicines-fillers-botulinum-toxin-library'"
    );
    expect(source).toContain('productKnowledgeEntries');
    expect(source).toContain('salonProductInventory');
    expect(source).toContain('research is not proof of Silk’s inventory');
  });
});
