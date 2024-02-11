import { Typography } from "../atom/Typography";
import { useMemory } from "./MemoryProvider";
import { MemoryCard } from "./MemoryCard";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const {cards, onReturnCard} = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 w-max">
      {cards.map((card) => {
        return (
        <MemoryCard key={card.id} onClick={() => onReturnCard(card)} card={card}>
          {card.emoji}
        </MemoryCard>
      )})}
    </div>
  );
};
