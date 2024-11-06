"use client";

import { useState } from "react";
import PlayerTab from "./PlayerTab";
import PlayerSidebar from "./PlayerSidebar";
import { cn } from "@/lib/utils";

interface PlayerInfo {
  level: number;
  health: { current: number; max: number };
  mana: { current: number; max: number };
  specialAbility: string;
}

interface Player {
  id: string;
  name: string;
  icon: string;
  info: PlayerInfo;
}

interface GameHeaderProps {
  gameId: string;
  gameTitle: string;
  players: Player[];
}

export default function GameHeader({ gameId, gameTitle, players }: GameHeaderProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <>
      <header className="flex justify-between items-stretch border-b-2 border-black h-[120px] overflow-hidden relative z-10">
        <div className="p-5">
          <div className="text-sm text-gray-500 mb-1">GAME UUID: ({gameId})</div>
          <h1 className="text-3xl font-bold">{gameTitle}</h1>
        </div>

        <div className="flex -ml-8">
          {players.map((player, index) => (
            <PlayerTab
              key={player.id}
              player={player}
              index={index}
              onClick={() => setSelectedPlayer(player)}
            />
          ))}
        </div>
      </header>

      <PlayerSidebar
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </>
  );
}