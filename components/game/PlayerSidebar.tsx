"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayerSidebarProps {
  player: {
    name: string;
    info: {
      level: number;
      health: { current: number; max: number };
      mana: { current: number; max: number };
      specialAbility: string;
    };
  } | null;
  onClose: () => void;
}

export default function PlayerSidebar({ player, onClose }: PlayerSidebarProps) {
  if (!player) return null;

  return (
    <div
      className={cn(
        "fixed top-[120px] right-0 w-[400px] h-[calc(100%-120px)]",
        "bg-[#333] text-white p-5 shadow-[-4px_0_8px_rgba(0,0,0,0.3)] z-50",
        "transform transition-transform duration-500",
        "animate-in slide-in-from-right"
      )}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-[#333] flex items-center justify-center hover:bg-gray-200 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <h3 className="text-xl font-bold mb-4">{player.name} Info</h3>
      
      <div className="space-y-2">
        <p>Character Level: {player.info.level}</p>
        <p>Health: {player.info.health.current}/{player.info.health.max}</p>
        <p>Mana: {player.info.mana.current}/{player.info.mana.max}</p>
        <p>Special Ability: {player.info.specialAbility}</p>
      </div>
    </div>
  );
}