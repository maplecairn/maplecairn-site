import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://maplecairn.ca/sitemap.xml",
    host: "https://maplecairn.ca",
  };
}
