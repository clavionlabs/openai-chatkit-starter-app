import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Write a job description for a Junior Interior Designer.",
    prompt: "Write a job description for a Junior Interior Designer.",
    icon: "circle-question",
  },
  {
    label: "Create interview questions for a Procurement Manager.",
    prompt: "Create interview questions for a Procurement Manager.",
    icon: "circle-question",
  },
  {
    label: "Draft an onboarding plan for a new Project Manager.",
    prompt: "Draft an onboarding plan for a new Project Manager.",
    icon: "circle-question",
  },
  {
    label: "We're a team of three with about $600K in revenue, but we're constantly hitting bottlenecks in procurement and project management. Can you help me define the ideal role to solve this and structure it so we hire for maximum efficiency?",
    prompt: "We're a team of three with about $600K in revenue, but we're constantly hitting bottlenecks in procurement and project management. Can you help me define the ideal role to solve this and structure it so we hire for maximum efficiency?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      // Melissa Galt brand colors - using lighter palette for both modes
      // Light Gold: #D8CA90 for consistent light appearance
      primary: "#D8CA90",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
