import React from "react";
import NavigationButton from "./NavigationButton";
import "./index.scss";

const Navigation = ({onPrevious, isPreviousDisabled, onNext}) => {
  return <div className="navigation">
    <NavigationButton text="Previous" onClick={onPrevious} disabled={isPreviousDisabled}/>
    <NavigationButton text="Next" onClick={onNext}/>
  </div>
}

export default Navigation;