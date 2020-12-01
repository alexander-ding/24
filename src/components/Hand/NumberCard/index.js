import React from "react";
import "./index.scss";

const NumberCard = ({n}) => {
  return <div className="number-card">
    <div className="number-card-number">
      { n }
    </div>
  </div>;
}

export default NumberCard;