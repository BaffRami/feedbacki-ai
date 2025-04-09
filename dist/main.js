"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptLoader_1 = require("./promptLoader");
require("dotenv/config");
function main() {
    // Read the PROMPT_VERSION from .env; default to 'v5' if not provided
    const promptVersion = process.env.PROMPT_VERSION || "v5";
    try {
        const promptContent = (0, promptLoader_1.loadPrompt)(promptVersion);
        console.log("Loaded prompt content:");
        console.log(promptContent);
        // Here you can integrate with your API logic,
        // passing the loaded prompt (promptContent) to your LLM or other evaluation systems.
    }
    catch (error) {
        console.error("Error loading prompt:", error);
    }
}
main();
