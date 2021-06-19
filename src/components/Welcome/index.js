import React, { useState } from 'react';
import Modal from 'react-modal';
import "./index.scss";

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

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <Modal
    isOpen={isOpen}
    onRequestClose={() => setIsOpen(false)}
    style={customStyles}
  >
    <div className="welcome-header">
      <h2>Welcome to 24!</h2>
      <button className="welcome-close" onClick={() => setIsOpen(false)}>&#10006;</button>
    </div>
    <p>The <a href="https://en.wikipedia.org/wiki/24_Game">24 Game</a> is an arithmetical card game. Each round, you are dealt a deck of 4 random poker cards between 1 and 13. The goal is to make the number 24 by combining all 4 cards using basic arithmetic operators: +, -, ×, ÷.</p>
    <p>For example, if you are dealt <b>| 1 | 2 | 3 | 8 |</b>, then one possible solution is <b>2 × (1 + 3 + 8) = 24</b>. Notice that you can reuse the same operator multiple times and group operators however you want, but you cannot reuse the same card. You are allowed to create fractions as intermediary values in your calculation, but the final result must be <b>24</b>.</p>
    <p>To combine two cards, select the first card, select an operator, and then select the second card, in that order. You can undo your last step or reset the puzzle at any time, and you can always revisit previous puzzles that you solved. Besides clicking on the cards, you can also use the built-in shortcuts to use the interface, which you can access by pressing <b>shift + s</b>. </p>
    <p>Check out the project's <a href="https://github.com/alexander-ding/24">GitHub</a>, star the repository, and help me improve the web app by opening issues and submitting pull requests!</p>
    <p>Made with ❤️ by <a href="https://alexander-ding.github.io/">Alex Ding</a>, 2021.</p>

  </Modal>
}

export default Welcome;