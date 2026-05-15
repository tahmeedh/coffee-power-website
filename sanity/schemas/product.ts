import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "longDescription", title: "Long Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "price", title: "Price (cents)", type: "number" }),
    defineField({ name: "stripePriceId", title: "Stripe Price ID", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "altitude", title: "Altitude", type: "string" }),
    defineField({ name: "variety", title: "Variety", type: "string" }),
    defineField({ name: "process", title: "Process", type: "string" }),
    defineField({ name: "origin", title: "Origin Country", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({ name: "flavorNotes", title: "Flavor Notes", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "bodyProfile",
      title: "Body Profile",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
      ],
    }),
    defineField({
      name: "acidityProfile",
      title: "Acidity Profile",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
      ],
    }),
    defineField({
      name: "aromaProfile",
      title: "Aroma Profile",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Current Harvest", "Limited Release", "Signature"] },
    }),
    defineField({ name: "available", title: "Available", type: "boolean", initialValue: true }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "name", subtitle: "origin", media: "heroImage" } },
});
