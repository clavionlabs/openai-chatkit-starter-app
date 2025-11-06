"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme("light");

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  const toggleTheme = () => {
    setScheme(scheme === "light" ? "dark" : "light");
  };

  return (
    <main className={`flex min-h-screen flex-col items-center transition-colors ${scheme === "light" ? "bg-slate-100" : "bg-slate-950"}`}>
      <div className="w-full max-w-5xl px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Image
              src="/images/design-business-freedom-logo.png"
              alt="Design Business Freedom with Melissa Galt"
              width={200}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </div>
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-[#B4995B] hover:border-[#D8CA90] ${scheme === "light" ? "bg-white" : "bg-slate-800"}`}
            aria-label="Toggle theme"
          >
            {scheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#D8CA90]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#D8CA90]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl mt-4 mb-8 px-4">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
