import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work history (by company/role), rendered inline on the home page.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
    order: z.number(),
  }),
});

// External articles / blog posts, rendered as a simple link list.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    publication: z.string(),
    topic: z.string(),
    // ISO date (yyyy-mm-dd); rendered as e.g. "Mar 2024".
    date: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { work, articles };
