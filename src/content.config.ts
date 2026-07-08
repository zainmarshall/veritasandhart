import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    published: z.boolean().default(true),
    tags: z.array(z.string()),
    problem: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    honestCaveat: z.string(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/site' }),
  schema: z.record(z.any()),
});

export const collections = { 'case-studies': caseStudies, site };
