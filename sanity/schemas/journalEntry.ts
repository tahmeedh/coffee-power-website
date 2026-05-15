import { defineField, defineType } from "sanity";

export default defineType({
  name: "journalEntry",
  title: "Journal Entry",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (R) => R.required() }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "excerpt", type: "text", title: "Excerpt", rows: 3 }),
    defineField({ name: "body", type: "array", title: "Body", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "heroImage", type: "image", title: "Hero Image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published At" }),
    defineField({ name: "author", type: "string", title: "Author", initialValue: "Chris Rosas" }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "heroImage" } },
});
