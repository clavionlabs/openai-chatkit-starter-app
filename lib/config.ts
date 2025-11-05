import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "$5M: CEO Transition & Leadership Team",
    prompt: "My firm is approaching $5M in revenue, and it's time for me to transition fully into the CEO role. Guide me through structuring an executive leadership team, including a Director of Design and Director of Operations, and outline a 6-month leadership handoff plan.",
    icon: "users",
  },
  {
    label: "$2M: Director of Operations",
    prompt: "Our firm is at $2M in revenue, and our systems are lagging behind our growth. Draft a Director of Operations job description for me and outline the key responsibilities I, as the principal, should delegate to this person to focus on creative direction.",
    icon: "briefcase",
  },
  {
    label: "$1M: Remote Team Structure",
    prompt: "We're a remote firm hitting over $1M in revenue, but our delivery systems are starting to crack. Advise me on the key remote roles—like a Design Coordinator or CAD Drafter—that will fix our bottlenecks without increasing physical overhead.",
    icon: "laptop",
  },
  {
    label: "$250K: First Strategic Hire",
    prompt: "My firm is generating around $250K, and I'm overwhelmed doing everything myself. Help me analyze whether my first investment in talent should be a Design Assistant, an Office Manager, or an Intern to get the greatest return on my time and energy.",
    icon: "user-plus",
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
