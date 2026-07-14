import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.canonicalUrl;
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/platform`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/stage`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/inquiry`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/invest`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
