import { groq } from "next-sanity";

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt asc) {
    _id,
    name,
    slug,
    shortDescription,
    price,
    stripePriceId,
    heroImage,
    altitude,
    variety,
    process,
    flavorNotes,
    status,
    available,
    "category": category
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    shortDescription,
    longDescription,
    price,
    stripePriceId,
    heroImage,
    gallery,
    altitude,
    variety,
    process,
    flavorNotes,
    bodyProfile,
    acidityProfile,
    aromaProfile,
    status,
    available
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(_createdAt asc)[0...6] {
    _id,
    name,
    slug,
    shortDescription,
    price,
    heroImage,
    flavorNotes,
    status
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]
`;

export const originStoryQuery = groq`
  *[_type == "originStory"] | order(_createdAt asc)
`;

export const journalEntriesQuery = groq`
  *[_type == "journalEntry"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    heroImage,
    publishedAt,
    author
  }
`;

export const journalEntryBySlugQuery = groq`
  *[_type == "journalEntry" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    heroImage,
    publishedAt,
    author
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(_createdAt asc)
`;
