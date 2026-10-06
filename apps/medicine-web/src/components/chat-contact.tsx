"use client";

import { createContext, useContext, type ReactNode } from "react";

const ChatSenderContext = createContext<string | null>(null);

function senderName(value: string) {
  return value.replace(/^\s*\d+[._-]?\s+/, "").trim() || "자료";
}

/** Keep the contact name scoped to its document, including nested text blocks. */
export function ChatSenderProvider({ name, children }: { name: string; children: ReactNode }) {
  return <ChatSenderContext.Provider value={senderName(name)}>{children}</ChatSenderContext.Provider>;
}

export function useChatSenderName(fallback = "자료") {
  return useContext(ChatSenderContext) ?? senderName(fallback);
}
