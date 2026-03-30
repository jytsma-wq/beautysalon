import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schema from './sanity/schema';

export default defineConfig({
  name: 'silk-beauty-salon',
  title: 'Silk Beauty Salon',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema,

  basePath: '/studio',
});
