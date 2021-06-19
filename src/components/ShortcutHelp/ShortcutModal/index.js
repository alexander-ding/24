import React from "react";
import Modal from 'react-modal';
import { KEY_MAP } from "../../../utils";
import ShortcutHeader from "./ShortcutHeader";
import ShortcutRow from "./ShortcutRow";

const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    overflow: "auto",
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: "white",
    paddingTop: "10px",
  }
};

const ShortcutModal = ({ isOpen, close }) => {
  return <Modal
    isOpen={isOpen}
    onRequestClose={close}
    style={customStyles}
  >
    <h2>Shortcuts</h2>
    <div>
      <ShortcutRow shortcut={KEY_MAP["TOGGLE_SHORTCUT"]} />
      <ShortcutHeader text={"Game"} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_1"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_2"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_3"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_4"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_ADD"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_SUB"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_MUL"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_DIV"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_BACK"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_RESET"]} />
      <ShortcutHeader text={"Navigation"} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_NEXT"]} />
      <ShortcutRow shortcut={KEY_MAP["SELECT_PREVIOUS"]} />
    </div>
  </Modal>;
}

export default ShortcutModal;