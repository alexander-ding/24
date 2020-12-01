import React from "react";
import { GOAL_NUMBER } from "../../../../utils";
import "./index.scss";

const NumberCard = ({isHidden, isSelected, isFinal, n, select}) => {
  return isHidden ? 
  <div className="number-card-hidden"/> :
  <div className={"number-card " + (isFinal ? 
    (n.equals(GOAL_NUMBER) ? "correct" : "incorrect") :
    (isSelected ? "selected" : ""))
  } onClick={select}>
    <div className="number-card-number">
      { n.toFraction() }
    </div>
  </div>;
}

export default NumberCard;