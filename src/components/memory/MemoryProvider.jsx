// Memory Game - Exercise

import { createContext, useContext, useState } from "react";
import { GAME_STATUS, GAME_ACTION, getInitialMemory, CARD_STATE, isMemoryFinished, isPairCards, shuffle } from "../../lib/memory"; 

const MemoryContext=createContext()

export const MemoryContextProvider = ({ children }) => {

  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCounts, setTryCounts] = useState(0);

  const returnedCards = () => {
    
  }

  const values = {
    cards,
    tryCounts,
    returnedCards,
  }

  return <MemoryContext.Provider value = {values}>{children}</MemoryContext.Provider>;
};

export const useMemory = () => {
  const context = useContext(MemoryContext);

  if(!context) {
    throw new Error("useMemory must be used inside MemoryContextProvider");
  }
  return context;
}
