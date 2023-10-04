import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import React from "react";

export default function GameGrid() {
  const { games, error } = useGames();

  if (error !== "canceled") return <Text>{error}</Text>;
  return (
    <ul>
      {games.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}
