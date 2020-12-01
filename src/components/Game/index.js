import React, { useState } from "react";
import { computeHand, isComputationValid, isEndGame } from "../../utils";
import Hand from "./Hand";
import Navigation from "./Navigation";
import Operations from "./Operations";

const makeHistory = (hand, selected, operation) => ({
  hand,
  selected,
  operation
})

const Game = ({hand}) => {
  const [history, setHistory] = useState([makeHistory(hand, null, null)]);
  const latest = history[history.length - 1];
  const updateSelected = (index) => {
    setHistory([...history.slice(0, history.length - 1), makeHistory(latest.hand, index, latest.operation)]);
  }

  const selectCard = (index) => {
    if (index === latest.selected || isEndGame(latest.hand)) {
      updateSelected(null);
    } else if (latest.operation === null || latest.selected === null) {
      updateSelected(index);
    } else { // compute & push new history
      if (isComputationValid(latest.operation, hand[latest.selected], hand[index])) {
        setHistory([...history,
          makeHistory(computeHand(latest.operation, latest.selected, index, latest.hand), null, null)
        ]);
      }
    }
  }

  const updateOperation = (operation) => {
    setHistory([...history.slice(0, history.length - 1), makeHistory(latest.hand, latest.selected, operation)]);
  }

  const selectOperation = (operation) => {
    if (operation === latest.operation || isEndGame(latest.hand)) {
      updateOperation(null);
    } else {
      updateOperation(operation);
    }
  }

  const goBack = () => {
    if (history.length > 1) setHistory(history.slice(0, history.length - 1));
  }

  const reset = () => {
    setHistory([makeHistory(hand, null, null)]);
  }
  
  return <div className="game">
    <Navigation
      goBack={goBack}
      reset={reset}
    />
    <Hand 
      cards={latest.hand} 
      selected={latest.selected} 
      selectCard={selectCard}
    />
    <Operations
      selected={latest.operation}
      selectOperation={selectOperation}
    />
  </div>
}

export default Game;