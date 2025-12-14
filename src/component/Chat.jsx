// src/components/Chat.jsx (or .tsx)
import React, { useState } from "react";
import { Bot, SendHorizontal } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import useChatScroll from "../hooks/useChatScroll";
import useChatbot from "../hooks/useChatbot";

// highlight.js style (change to another theme if you want)
import "highlight.js/styles/github.css";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChatbot();
  const ref = useChatScroll(messages);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[80vh]">
      {/* Header */}
      <div className="p-4 bg-sky-500 text-white text-lg font-semibold flex items-center gap-2">
        <Bot size={26} /> AI Chatbot
      </div>

      {/* Chat messages */}
      <div ref={ref} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((m, i) => {
          // ensure the text is a string
          const text = typeof m.text === "string" ? m.text : String(m.text ?? "");

          return (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[80%] shadow-sm ${
                m.sender === "user" ? "bg-sky-400 text-white ml-auto" : "bg-white text-gray-800 border"
              }`}
            >
              <ReactMarkdown
                // GFM: tables, strikethrough, tasklists, hard breaks
                remarkPlugins={[remarkGfm]}
                // rehypeRaw lets HTML in markdown be parsed — enable only for trusted input
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                // customize code and inline code rendering
                components={{
                  a: ({ node, ...props }) => <a className="text-blue-400 underline" {...props} />,
                  code({ node, inline, className, children, ...props }) {
                    if (inline) {
                      return (
                        <code className="bg-gray-200 px-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="rounded-md p-2 overflow-auto text-sm border bg-gray-900 text-white">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    );
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button onClick={handleSend} className="bg-sky-500 text-white p-3 rounded-lg hover:bg-blue-700">
          <SendHorizontal size={22} />
        </button>
      </div>
    </div>
  );
}
