import { z, defineCollection } from "astro:content";

const chapterCollection = defineCollection({
    type: "data",
    schema: z.object({
        id: z.number(),
        arabic: z.string(),
        english: z.array(z.string()),
        epoch: z.enum(["mecca", "medina"]),
        verses: z.array(z.object({
            id: z.number(),
            text: z.string()
        }))
    })
})

export const collections = {
    'chapters' : chapterCollection
}