import Mousetrap from "mousetrap";
import React, { useEffect, useState } from "react";
import { KEY_MAP } from "../../utils";
import ShortcutDisplay from "./ShortcutDisplay";
import "./index.scss";
import ShortcutModal from "./ShortcutModal";

const ShortcutHelp = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);
  useEffect(() => {
    Mousetrap.bind(KEY_MAP["TOGGLE_SHORTCUT"], () => setShowShortcuts(!showShortcuts));
    Mousetrap.bind(KEY_MAP["CLOSE_SHORTCUT"], () => setShowShortcuts(false));
    return () => {
      Mousetrap.unbind(KEY_MAP["TOGGLE_SHORTCUT"]);
      Mousetrap.unbind(KEY_MAP["CLOSE_SHORTCUT"]);
    }
  }, [showShortcuts]);
  return <div className="shortcut-help">
    Press <ShortcutDisplay shortcut={KEY_MAP["TOGGLE_SHORTCUT"][0]}/> to view all shortcuts
    <ShortcutModal isOpen={showShortcuts} close={() => setShowShortcuts(false)}/>
  </div>;
}

export default ShortcutHelp;