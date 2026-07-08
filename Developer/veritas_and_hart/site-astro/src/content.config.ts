import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
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
  type: 'data',
  schema: z.record(z.any()),
});

export const collections = { 'case-studies': caseStudies, site };
