import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vorticeintegration.com";
  const currentDate = new Date();

  const routes = [
    "",
    "/vortice",
    "/diagnostico",
    "/acompanamiento",
    "/contacto",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/diagnostico" ? 0.9 : 0.8,
  }));
}
