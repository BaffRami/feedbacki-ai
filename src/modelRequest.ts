import axios from "axios";
import "dotenv/config";

// Sends a request to the Azure OpenAI model with the given prompt.
export async function sendPromptToModel(prompt: string): Promise<any> {
  // Retrieve configuration from environment variables
  const apiHost = process.env.AZURE_API_HOST; // "https://probearbeit-ai.openai.azure.com/"
  const apiKey = process.env.AZURE_API_KEY; // API KEY
  const deployment = process.env.AZURE_DEPLOYMENT || "gpt-4o-mini";
  const apiVersion = process.env.AZURE_API_VERSION || "2024-02-15-preview";

  if (!apiHost || !apiKey) {
    throw new Error(
      "Missing Azure API configuration in environment variables."
    );
  }

  const url = `${apiHost}/openai/deployments/${deployment}/completions?api-version=${apiVersion}`; // URL for the API call

  const data = {
    prompt,
    max_tokens: 300,
    temperature: 0.7,
  };

  const headers = {
    // Sets up the headers
    "Content-Type": "application/json",
    "api-key": apiKey,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error sending prompt to model:", error);
    throw error;
  }
}
