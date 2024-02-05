import fs from "fs/promises";
import path from "path";

const dataFolder = path.join(process.cwd(), "src/data/portfolio");
const imagesFolder = path.join(process.cwd(), "public/portfolio");

const readImages = async (id: string) => {
  const imagesPath = path.join(imagesFolder, id);
  const images = await fs.readdir(imagesPath);

  return images
    .filter((name) => /\d+\.(png|jpe?g|webp)/.test(name))
    .map((name) => `/portfolio/${id}/${name}`);
};

const readData = async (id: string) => {
  const projectFile = path.join(dataFolder, `${id}.json`);
  const dataString = await fs.readFile(projectFile, "utf-8");

  return JSON.parse(dataString);
};

export async function requestPortfolio(projectId: string) {
  const data = await readData(projectId);
  const images = await readImages(projectId);

  return { id: projectId, images, ...data };
}
