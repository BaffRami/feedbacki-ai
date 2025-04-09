import axios from "axios";
import { sendPromptToModel } from "./modelRequest";

jest.mock("axios"); // Replaces axios with a Jest mock

describe("sendPromptToModel", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {}); // This wass used to prevent to reduce console text during development
  });

  it("should send the correct request and return the expected response data", async () => {
    const prompt = "Test prompt content."; // sample prompt and sample response
    const mockedResponseData = {
      choices: [{ text: "A sample feedback response." }],
    };

    // Sets up axios.post to resolve with a successful response.
    mockedAxios.post.mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await sendPromptToModel(prompt);

    // Verifies that the function returns the expected data.
    expect(result).toEqual(mockedResponseData);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);

    // Retrievess the arguments from the axios.post call.
    const callArgs = mockedAxios.post.mock.calls[0];
    const requestUrl = callArgs[0] as string;
    const requestData = callArgs[1] as { prompt: string };

    // If the third argument is missing, provide a default with a headers property.
    const requestConfig = callArgs[2]
      ? (callArgs[2] as { headers: any })
      : { headers: {} };

    // checks properties on requestConfig.headers.
    expect(requestUrl).toContain(process.env.AZURE_API_HOST as string);
    expect(requestData.prompt).toBe(prompt);
    expect(requestConfig.headers).toHaveProperty("api-key");
  });

  it("should throw an error when the request fails", async () => {
    const prompt = "Test prompt content.";
    const errorMessage = "Request failed";

    // Checks a failure case in axios
    mockedAxios.post.mockRejectedValue(new Error(errorMessage));

    await expect(sendPromptToModel(prompt)).rejects.toThrow(errorMessage);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });
});
