"use client";

import React from "react";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="p-4 w-full sm:basis-1/4">
      <div className="flex flex-col space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="flex w-full justify-start">
            <div className="flex flex-col max-w-[85%]">
              <div className="bg-gray-100 p-3 rounded-lg break-words">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
