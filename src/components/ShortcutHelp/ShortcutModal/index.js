import React from "react";
import Modal from 'react-modal';
import "./index.scss";

const ShortcutModal = ({isOpen, close}) => {
  return <Modal
    isOpen={isOpen}
    onRequestClose={close}
    className="shortcut-modal"
  >
    <h3>Shortcuts</h3>
    <div>Hi</div>
  </Modal>;
} 

export default ShortcutModal;