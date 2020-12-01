import React, { useState } from "react";
import Hand from "../../components/Hand";
import { generateHand } from "../../utils";
import "./index.scss";

const GamePage = () => {
  const [hands, setHands] = useState([]);

  const newHand = () => {
    const hand = generateHand(hands);
    setHands([...hands, hand]);
  }

  return <div className="game-page">
    {
      hands.length === 0 ?
      <button onClick={newHand}>Start</button> :
      <Hand cards={hands[hands.length - 1]}/>
    }  
  </div>
}

export default GamePage;
