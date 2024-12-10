"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mic, Search } from "lucide-react";
import React, { useRef, useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [typingHeight, setTypingHeight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputMessage(value);

    if (inputRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(inputRef.current).lineHeight
      );
      const lines = value.split("\n").length;
      const newHeight = Math.min(lines * lineHeight, 150);
      setTypingHeight(newHeight);
    }
  };

  const handleSend = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage("");
      setTypingHeight(0);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
      <div className="flex items-center space-x-2">
        <div className="flex-grow relative">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full pr-5"
            style={{
              height: `${Math.max(2.5, typingHeight / 16)}rem`,
              transition: "height 0.3s ease-in-out",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <Mic className="text-gray-500 cursor-pointer w-5 h-5" />
            <MapPin className="text-gray-500 cursor-pointer w-5 h-5" />
          </div>
        </div>
        <Button onClick={handleSend} className="shrink-0">
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
