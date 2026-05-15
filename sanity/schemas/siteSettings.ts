import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroHeading", title: "Home Hero Heading", type: "string" }),
    defineField({ name: "heroSubheading", title: "Home Hero Subheading", type: "text", rows: 2 }),
    defineField({ name: "shopHeroHeading", title: "Shop Hero Heading", type: "string" }),
    defineField({ name: "storyHeroHeading", title: "Story Hero Heading", type: "string" }),
    defineField({ name: "footerTagline", title: "Footer Tagline", type: "string" }),
    defineField({ name: "newsletterHeading", title: "Newsletter Heading", type: "string" }),
    defineField({ name: "newsletterBody", title: "Newsletter Body", type: "text", rows: 2 }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "whatsappUrl", title: "WhatsApp URL", type: "url" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
