import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('blog internal links', () => {
  it('links the Botox and fillers guide to the local Botox Batumi page', () => {
    const source = fs.readFileSync(path.join(process.cwd(), 'src/data/blog.ts'), 'utf8');

    expect(source).toContain("slug: 'botox-fillers-batumi-consultation-guide'");
    expect(source).toContain('href="/en/botox-batumi">Botox in Batumi page</a>');
  });
});
