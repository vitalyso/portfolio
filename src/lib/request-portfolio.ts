import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { PortfolioItem } from "~/types";

const dataFolder = path.join(process.cwd(), "src/data/portfolio");
const imagesFolder = path.join(process.cwd(), "public/portfolio");

const readImages = async (id: string) => {
  const imagesPath = path.join(imagesFolder, id);
  const files = await fs.readdir(imagesPath);

  const result = files
    .filter((name) => /.(png|jpe?g|webp|svg)$/.test(name))
    .map(async (name) => {
      const filePath = path.join(imagesPath, name);
      const metadata = await sharp(filePath).metadata();
      const src = `/portfolio/${id}/${name}`;

      return {
        src,
        width: metadata.width,
        height: metadata.height,
        blurDataURL: `/_next/image?url=${src}&w=8&q=70`,
        blurWidth: 8,
        blurHeight: 4,
      };
    });

  const images = await Promise.all(result);
  const screenshots = images.filter((img) => /\d+\.(.*)$/.test(img.src));
  const logo = images.find((img) => /logo\.(.*)$/.test(img.src));
  const cover = images.find((img) => img.src.includes("showcase-bg"));

  return { screenshots, logo, cover };
};

const readData = async (id: string) => {
  const projectFile = path.join(dataFolder, `${id}.json`);
  const dataString = await fs.readFile(projectFile, "utf-8");

  return JSON.parse(dataString);
};

export async function requestPortfolio(projectId: string) {
  const data = await readData(projectId);
  const images = await readImages(projectId);

  return {
    id: projectId,
    images: images.screenshots,
    logo: images.logo ?? null,
    cover: images.cover ?? null,
    ...data,
  };
}
export async function requestPortfolioList(): Promise<PortfolioItem[]> {
  const files = await fs.readdir(dataFolder);
  return await Promise.all(
    files.map(async (file) => {
      const data = await requestPortfolio(file.replace(/\.json$/, ""));
      return { id: file.replace(/\.json$/, ""), ...data };
    }),
  );
}
