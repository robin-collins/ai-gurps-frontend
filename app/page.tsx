import GameHeader from "@/components/game/GameHeader";
import TextInput from "@/components/game/TextInput";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GameHeader 
        gameId="XXX-999-AA"
        gameTitle="GAME TITLE"
        players={[
          {
            id: "1",
            name: "Player1",
            icon: "P1",
            info: {
              level: 10,
              health: { current: 100, max: 100 },
              mana: { current: 50, max: 50 },
              specialAbility: "Fireball"
            }
          },
          {
            id: "2",
            name: "Player2",
            icon: "P2",
            info: {
              level: 8,
              health: { current: 80, max: 100 },
              mana: { current: 60, max: 60 },
              specialAbility: "Shield"
            }
          },
          {
            id: "3",
            name: "YourName",
            icon: "Y",
            info: {
              level: 15,
              health: { current: 120, max: 120 },
              mana: { current: 100, max: 100 },
              specialAbility: "Thunderstrike"
            }
          }
        ]}
      />
      <TextInput />
    </main>
  );
}