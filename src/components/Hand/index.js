import React from "react";
import NumberCard from "./NumberCard";
import "./index.scss";

const Hand = ({cards}) => {
  return <div className="hand">
    {cards.map((n, index) => <NumberCard key={index} n={n}/>)}
  </div>
}

export default Hand;