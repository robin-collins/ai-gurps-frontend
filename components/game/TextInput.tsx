"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextInput() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-[#444] text-white p-4",
        "shadow-[0_-4px_8px_rgba(0,0,0,0.3)] z-10",
        "transition-all duration-500"
      )}
    >
      <div
        className={cn(
          "extra-info bg-[#555] rounded p-3 mb-4",
          isExpanded ? "block" : "hidden"
        )}
      >
        <p>Relevant information or clickable action options go here.</p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white text-[#444] px-3 py-1.5 rounded text-sm mb-3 hover:bg-gray-100 transition-colors"
      >
        {isExpanded ? (
          <>
            Collapse <ChevronDown className="inline w-4 h-4" />
          </>
        ) : (
          <>
            Expand <ChevronUp className="inline w-4 h-4" />
          </>
        )}
      </button>

      <textarea
        placeholder="Enter your text here..."
        className={cn(
          "w-full p-3 rounded resize-none bg-white text-black",
          isExpanded ? "h-[300px]" : "h-[100px]",
          "transition-all duration-500"
        )}
      />
    </div>
  );
}