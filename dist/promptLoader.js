"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPrompt = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Loads the prompt from the /prompts folder based on the provided version.
 *
 * @param version - The version identifier (e.g., 'v1', 'v2', 'v5').
 * @returns The content of the prompt file.
 */
function loadPrompt(version) {
    // Construct the filename using the provided version, e.g., "feedback_v5.txt"
    const promptFilename = `feedback_${version}.txt`;
    // Build an absolute path to the prompt file; __dirname refers to /src
    const promptPath = path.join(__dirname, "..", "prompts", promptFilename);
    try {
        const content = fs.readFileSync(promptPath, "utf8");
        return content;
    }
    catch (error) {
        console.error(`Could not load prompt file: ${promptFilename}`, error);
        throw error;
    }
}
exports.loadPrompt = loadPrompt;
