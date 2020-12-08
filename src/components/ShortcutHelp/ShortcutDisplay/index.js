import React from "react";
import Shortcut from "./Shortcut";
import "./index.scss";

const ShortcutDisplay = ({shortcut}) => {
  const keys = shortcut.split("+");
  return <div className="shortcut-display">
    { keys.map((key, index) => <Shortcut key={index} shortcut={key}/>)}
  </div>;
}

export default ShortcutDisplay;