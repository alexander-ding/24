import React from "react";
import "./index.scss";
import ShortcutDisplay from "../../ShortcutDisplay";
import Divider from "../Divider";

const ShortcutRow = ({shortcut}) => {
  return <>
    <div className="shortcut-row">
      <span>{shortcut.description}</span>
      <div className="shortcut-row-keys">
        {
          shortcut.keys.map((key, index) => 
            <React.Fragment key={index}>
              <ShortcutDisplay shortcut={key}/>
              {index !== (shortcut.keys.length - 1) ? "/" : null}
            </React.Fragment>
          )
        }
      </div>
    </div>
    <Divider/>
  </>;
}

export default ShortcutRow;