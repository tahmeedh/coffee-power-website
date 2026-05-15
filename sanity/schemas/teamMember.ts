import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (R) => R.required() }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({ name: "portrait", type: "image", title: "Portrait", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", title: "Bio", rows: 4 }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "portrait" } },
});
