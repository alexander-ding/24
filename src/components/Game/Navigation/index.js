import React from "react";
import "./index.scss";
import NavigationButton from "./NavigationButton";

const Navigation = ({goBack, reset}) => {
  return <div className="game-navigation">
    <NavigationButton text="Back" onClick={goBack}/>
    <NavigationButton text="Reset" onClick={reset}/>
  </div>;
}

export default Navigation;