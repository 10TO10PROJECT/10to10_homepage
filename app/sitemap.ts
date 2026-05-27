import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/platform`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/stage`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
