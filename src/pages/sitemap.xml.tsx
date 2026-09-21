import type { GetServerSideProps } from "next";
import { requestPortfolioList } from "~/lib/request-portfolio";

const siteUrl = "https://sivkoff.com";

function buildSitemap(paths: string[]) {
  const urls = paths
    .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const portfolio = await requestPortfolioList();
  const paths = [
    "/",
    "/work",
    ...portfolio.map((item) => `/work/${item.id}`),
  ];

  res.setHeader("Content-Type", "text/xml");
  res.write(buildSitemap(paths));
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
