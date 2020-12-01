import React from "react";
import NumberCard from "./NumberCard";
import "./index.scss";
import { isEndGame } from "../../../utils";

const Hand = ({cards, selected, selectCard}) => {
  return <div className="hand">
    {cards.map((n, index) => 
    <NumberCard 
      key={index} 
      n={n} 
      isHidden={n === null} 
      isSelected={index === selected}
      isFinal={isEndGame(cards)}
      select={() => selectCard(index)}
    />)}
  </div>
}

export default Hand;