"use client";

import type { ReactNode } from "react";
import type { ColorScheme } from "@openai/chatkit";

type ErrorOverlayProps = {
  error: string | null;
  fallbackMessage?: ReactNode;
  onRetry?: (() => void) | null;
  retryLabel?: string;
  theme?: ColorScheme;
};

export function ErrorOverlay({
  error,
  fallbackMessage,
  onRetry,
  retryLabel,
  theme = "light",
}: ErrorOverlayProps) {
  if (!error && !fallbackMessage) {
    return null;
  }

  const content = error ?? fallbackMessage;

  if (!content) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col justify-center rounded-[inherit] p-6 text-center backdrop-blur ${theme === "dark" ? "bg-slate-900/90" : "bg-white/85"}`}>
      <div className={`pointer-events-auto mx-auto w-full max-w-md rounded-xl px-6 py-4 text-lg font-medium ${theme === "dark" ? "bg-transparent text-slate-100" : "bg-white text-slate-700"}`}>
        <div>{content}</div>
        {error && onRetry ? (
          <button
            type="button"
            className={`mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 ${theme === "dark" ? "bg-slate-100 text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"}`}
            onClick={onRetry}
          >
            {retryLabel ?? "Restart chat"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
