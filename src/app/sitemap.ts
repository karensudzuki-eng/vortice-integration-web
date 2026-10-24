import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vorticeintegration.cl";
  const currentDate = new Date();

  const routes = [
    "",
    "/servicios",
    "/metodologia",
    "/precios",
    "/levantamiento",
    "/quienes-somos",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/levantamiento" ? 0.9 : 0.8,
  }));
}
