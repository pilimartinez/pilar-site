import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies live as Markdown in src/content/work/ and are loaded with the
// glob() loader (the Content Layer API in Astro 6).
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    tech: z.array(z.string()),
    summary: z.string(),
    order: z.number(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

export const collections = { work };
