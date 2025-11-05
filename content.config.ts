import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    // define a default content collection一个默认的内容集合
    collections: {
        articles: defineCollection({
            type: 'page', // or 'data'
            source: 'articles', // point to content/articles catalog
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects',
        }),
    },
})