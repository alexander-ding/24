import React, { useState } from "react";
import Game from "../../components/Game";
import Navigation from "../../components/Navigation";
import { generateHand } from "../../utils";
import "./index.scss";

const GamePage = () => {
  const [hands, setHands] = useState([generateHand([])]);
  const [currentHand, setCurrentHand] = useState(0);
  const newHand = () => {
    const hand = generateHand(hands);
    setHands([...hands, hand]);
  }
  
  const onPrevious = () => {
    if (currentHand !== 0) {
      setCurrentHand(currentHand - 1);
    }
  }

  const onNext = () => {
    if (currentHand === (hands.length - 1)) {
      newHand();
    }
    setCurrentHand(currentHand + 1);
  }


  return <div className="game-page">
    <Navigation 
      onPrevious={onPrevious} 
      isPreviousDisabled={currentHand === 0} 
      onNext={onNext}
    />
    <Game key={currentHand} hand={hands[currentHand]}/> 
  </div>;
}

export default GamePage;
