import { defineField, defineType } from "sanity";

export default defineType({
  name: "originStory",
  title: "Origin Story Block",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Block Title (internal)", validation: (R) => R.required() }),
    defineField({ name: "heading", type: "string", title: "Display Heading" }),
    defineField({ name: "body", type: "array", title: "Body", of: [{ type: "block" }] }),
    defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true } }),
    defineField({ name: "pullQuote", type: "string", title: "Pull Quote" }),
    defineField({ name: "pullQuoteAttribution", type: "string", title: "Pull Quote Attribution" }),
    defineField({
      name: "blockType",
      type: "string",
      title: "Block Type",
      options: { list: ["volcanic-minerality", "living-mountain", "nasa-heritage", "process", "custom"] },
    }),
  ],
  preview: { select: { title: "title", subtitle: "blockType", media: "image" } },
});
