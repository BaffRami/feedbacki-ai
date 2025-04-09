import { loadPrompt } from "./promptLoader";
import { sendPromptToModel } from "./modelRequest";
import "dotenv/config";

async function main() {
  const promptVersion = process.env.PROMPT_VERSION || "v5"; // Gets the prompt version

  try {
    const promptContent = loadPrompt(promptVersion); // Loads the prompt content from the file
    console.log("Loaded prompt content:");
    console.log(promptContent);

    const modelResponse = await sendPromptToModel(promptContent); // Sends the loaded prompt to the model
    console.log("Model response received:");
    console.log(modelResponse);
  } catch (error) {
    console.error("Error during processing:", error);
  }
}

main();
