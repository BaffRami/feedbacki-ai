import * as fs from "fs";
import * as path from "path";

// Loads the prompt from the /prompts folder based on the provided version.
export function loadPrompt(version: string): string {
  const promptFilename = `feedback_${version}.txt`; // Constructs the filename"

  const promptPath = path.join(__dirname, "..", "prompts", promptFilename); // Builds absolute path to the prompt file

  try {
    const content = fs.readFileSync(promptPath, "utf8");
    return content;
  } catch (error) {
    console.error(`Could not load prompt file: ${promptFilename}`, error);
    throw error;
  }
}
