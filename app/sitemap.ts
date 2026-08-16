import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.canonicalUrl;
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/platform`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/inquiry`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
