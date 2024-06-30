import fsPromises from "fs/promises";
import path from "path";

export async function getLocalData() {
  const filePath = path.join(process.cwd(), "/data/data.json");
  try {
    const jsonData = await fsPromises.readFile(filePath, "utf-8");
    const objectData = JSON.parse(jsonData);
    console.log(objectData);
    return objectData;
  } catch (error) {
    console.error("Failed to read or parse the JSON file:", error);
    throw error; // Rethrow or handle the error as needed
  }
}
