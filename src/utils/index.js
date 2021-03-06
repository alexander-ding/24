const Fraction = require("fraction.js");

export const convertShortcut = (s) => {
  switch (s) {
    case "left":
      return "←";
    case "right":
      return "→";
    default:
      return s.toUpperCase();
  }
}

export const KEY_MAP = {
  SELECT_1: {
    keys: ["1", "a"],
    description: "Select card 1",
  },
  SELECT_2: {
    keys: ["2", "s"],
    description: "Select card 2",
  },
  SELECT_3: {
    keys: ["3", "d"],
    description: "Select card 3",
  },
  SELECT_4: {
    keys: ["4", "f"],
    description: "Select card 4",
  },
  SELECT_ADD: {
    keys: ["shift+=", "j"],
    description: "Select addition",
  },
  SELECT_SUB: {
    keys: ["-", "k"],
    description: "Select subtraction",
  },
  SELECT_MUL: {
    keys: ["shift+8", "l"],
    description: "Select multiplication",
  },
  SELECT_DIV: {
    keys: ["/", ";"],
    description: "Select division",
  },
  SELECT_BACK: {
    keys: ["backspace", "b"],
    description: "Go back one step",
  },
  SELECT_RESET: {
    keys: ["r"],
    description: "Reset current problem",
  },
  SELECT_NEXT: {
    keys: ["enter", "right", "space", "]"],
    description: "Go to next problem",
  },
  SELECT_PREVIOUS: {
    keys: ["'", "left", "p", "["],
    description: "Go to previous problem",
  },
  TOGGLE_SHORTCUT: {
    keys: ["shift+s"],
    description: "Toggle shortcut display",
  },
  CLOSE_SHORTCUT: {
    keys: ["esc"],
    description: "Close shortcut display",
  },
}

export const mapCardToKey = (card) => {
  return "SELECT_" + (card + 1).toString();
}

export const mapOperationToKey = (operation) => {
  switch (operation) {
    case "ADD":
      return "SELECT_ADD";
    case "SUB":
      return "SELECT_SUB";
    case "MUL":
      return "SELECT_MUL";
    case "DIV":
      return "SELECT_DIV";
    default:
      return "ERROR";
  }
}

export const isSolvable = (hand) => {
  if (hand.length === 1) {
    return hand[0].equals(24);
  }

  for (var i = 0; i < hand.length; i++) {
    for (var j = 0; j < hand.length; j++) {
      if (i === j) continue;
      for (const op of ALL_OPERATIONS) {
        if (isComputationValid(op, hand[i], hand[j])) {
          // eslint-disable-next-line no-loop-func
          const isCorrect = isSolvable([...hand.filter((_,index) => index !== i && index !== j), compute(op, hand[i], hand[j])]);
          if (isCorrect) return true;
        }
      }
    }
  }
  return false;
}

export const NUM_CARDS = 4;
export const NUM_MIN = 1;
export const NUM_MAX = 13;

const generateCandidateHand = () => {
  return Array.apply(null, Array(NUM_CARDS)).map(
    () => Fraction(Math.floor(Math.random() * (NUM_MAX - NUM_MIN)) + NUM_MIN)
  );
}

export const generateHand = (previousHands) => {
  var hand;
  while (true) {
    hand = generateCandidateHand();
    // eslint-disable-next-line no-loop-func
    if (isSolvable(hand) && previousHands.filter(previousHand => previousHand === hand).length === 0) {
      return hand;
    }
  }
  
}

export const mapOperationToText = (operation) => {
  switch (operation) {
    case "ADD":
      return "+";
    case "SUB":
      return "-";
    case "MUL":
      return "×";
    case "DIV":
      return "÷";
    default:
      return "ERROR";
  }
}

export const ALL_OPERATIONS = ["ADD", "SUB", "MUL", "DIV"];

export const isComputationValid = (operation, n1, n2) => {
  return !(operation === "DIV" && n2.equals(0));
}

const compute = (operation, n1, n2) => {
  switch (operation) {
    case "ADD":
      return n1.add(n2);
    case "SUB":
      return n1.sub(n2);
    case "MUL":
      return n1.mul(n2);
    case "DIV":
      return n1.div(n2);
    default:
      return "ERROR";
  }
}

export const computeHand = (operation, n1Index, n2Index, currentHand) => {
  const n1 = currentHand[n1Index];
  const n2 = currentHand[n2Index];

  const newNumber = compute(operation, n1, n2);
  let newHand = [...currentHand];
  newHand[n1Index] = null;
  newHand[n2Index] = newNumber;
  return newHand;
}

export const GOAL_NUMBER = 24;

export const isEndGame = (hand) => {
  return hand.filter((card) => card !== null).length === 1;
}

export const isWin = (hand) => {
  return isEndGame(hand) && hand.filter((card) => card !== null)[0].equals(24);
}