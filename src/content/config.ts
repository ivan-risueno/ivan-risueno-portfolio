import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    img: z.string(),
    githubUrl: z.string().url(),
    publishedAt: z.date(),
  }),
});

export const collections = { projects };