import React from "react";
import "./index.scss";

const NavigationButton = ({text, onClick}) => {
  return <div className="game-navigation-button" onClick={onClick}>
    <div className="game-navigation-button-text">
      { text }
    </div>
  </div>;
}

export default NavigationButton;