import React from "react";
import { convertShortcut } from "../../../../utils";
import "./index.scss";

const Shortcut = ({shortcut}) => {
  const displayString = convertShortcut(shortcut);
  return <span className="shortcut">
    {displayString}
  </span>
}

export default Shortcut;