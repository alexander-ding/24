import React from "react";
import "./index.scss";

const NavigationButton = ({text, onClick, disabled=false}) => {
  return <div className={"navigation-button " + (disabled ? "disabled" : "")} onClick={onClick}>
    <div className="navigation-button-text">
      { text }
    </div>
  </div>;
}

export default NavigationButton;