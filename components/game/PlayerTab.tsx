"use client";

import { cn } from "@/lib/utils";

interface PlayerTabProps {
  player: {
    name: string;
    icon: string;
  };
  index: number;
  onClick: () => void;
}

export default function PlayerTab({ player, index, onClick }: PlayerTabProps) {
  const bgColors = ["bg-[#222]", "bg-[#444]", "bg-[#666]"];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center min-w-[200px] h-full -ml-8 text-white uppercase cursor-pointer transition-colors hover:bg-[#888]",
        bgColors[index % bgColors.length],
        "clip-tab" // Custom clip-path class
      )}
      onClick={onClick}
    >
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mb-1">
        {player.icon}
      </div>
      <div className="text-sm">{player.name}</div>
    </div>
  );
}