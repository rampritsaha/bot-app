"use client";

import { MessageInput } from "@/components/chat/message-input";
import { MessageList } from "@/components/chat/message-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/chat";
import { useEffect, useRef, useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const newMessages = [
      ...messages,
      {
        id: Date.now(),
        text: message,
      },
    ];
    setMessages(newMessages);
  };

  return (
    <div className="h-[calc(100vh-90px)]">
      <ScrollArea className="flex flex-1 h-[720px] sm:h-[650px] md:h-[650px] lg:h-[550px] xl:h-[540px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex space-y-1">
            <MessageList
              messages={[
                {
                  id: Date.now(),
                  text: "Hello" + i,
                },
              ]}
            />
            <div className="flex sm:grow bg-gray-100 py-1 sm:w-full items-center justify-center h-[400px]">
              <div className="w-4/5 h-4/5">
                <h1>Welcome to the Dashboard</h1>
              </div>
            </div>
            <div ref={messagesEndRef} />
          </div>
        ))}
      </ScrollArea>

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
