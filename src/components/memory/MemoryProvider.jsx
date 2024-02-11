// Memory Game - Exercise

import { createContext, useContext, useMemo, useState } from "react";
import { getInitialMemory, CARD_STATE, isMemoryFinished, isPairCards } from "../../lib/memory"; 

const MemoryContext=createContext()

export const MemoryContextProvider = ({ children }) => {

  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCounts, setTryCounts] = useState(0);

  const onReturnCard = (returnedCard) => {

    if (returnedCard.state ==! CARD_STATE.HIDE) {return;}

    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    if (returnedCards.length === 2 || returnedCards.includes(returnedCard)) {
      return;
    }

    setCards((current) => current.map((card) => { 
      if (returnedCard.id === card.id) { card.state = CARD_STATE.RETURNED } 
      return card;
    }))

    if (returnedCards.length === 0) {return;}
    returnedCards.push(returnedCard);
    
    computeReturnedCards(returnedCards);
    setTryCounts((prev) => prev + 1);
  };

  const computeReturnedCards = (returnedCards) => {
    const isPair = isPairCards(returnedCards[0], returnedCards[1]);
    setTimeout(() => {
      setCards((current) => { 
        return current.map((card) => { 
          if(card.state === CARD_STATE.RETURNED && returnedCards.includes(card)) {
            card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
          }
          return card;
        })
      })
    }, isPair ? 400 : 1000)
  }

  const reset = () => {
    setCards(getInitialMemory());
    setTryCounts(0);
  }

  const finishedMemory = useMemo(() => isMemoryFinished(cards), [cards]); 

  const values = {
    cards,
    tryCounts,
    onReturnCard,
    reset,
    finishedMemory,
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
