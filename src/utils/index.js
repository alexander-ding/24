const Fraction = require("fraction.js");

exports.isSolvable = (hand) => {
  if (hand.length === 1) {
    return hand[0].equals(24);
  }

  for (var i = 0; i < hand.length; i++) {
    for (var j = 0; j < hand.length; j++) {
      if (i === j) continue;
      for (const op of exports.ALL_OPERATIONS) {
        if (exports.isComputationValid(op, hand[i], hand[j])) {
          // eslint-disable-next-line no-loop-func
          const isCorrect = exports.isSolvable([...hand.filter((_,index) => index !== i && index !== j), compute(op, hand[i], hand[j])]);
          if (isCorrect) return true;
        }
      }
    }
  }
  return false;
}

exports.NUM_CARDS = 4;
exports.NUM_MIN = 1;
exports.NUM_MAX = 13;

const generateCandidateHand = () => {
  return Array.apply(null, Array(exports.NUM_CARDS)).map(
    () => Fraction(Math.floor(Math.random() * (exports.NUM_MAX - exports.NUM_MIN)) + exports.NUM_MIN)
  );
}

exports.generateHand = (previousHands) => {
  var hand;
  while (true) {
    hand = generateCandidateHand();
    if (exports.isSolvable(hand) && previousHands.filter(previousHand => previousHand === hand).length === 0) {
      return hand;
    }
  }
  
}

exports.mapOperationToText = (operation) => {
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

exports.ALL_OPERATIONS = ["ADD", "SUB", "MUL", "DIV"];

exports.isComputationValid = (operation, n1, n2) => {
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

exports.computeHand = (operation, n1Index, n2Index, currentHand) => {
  const n1 = currentHand[n1Index];
  const n2 = currentHand[n2Index];

  const newNumber = compute(operation, n1, n2);
  let newHand = [...currentHand];
  newHand[n1Index] = null;
  newHand[n2Index] = newNumber;
  return newHand;
}

exports.GOAL_NUMBER = 24;

exports.isEndGame = (hand) => {
  return hand.filter((card) => card !== null).length === 1;
}

exports.isWin = (hand) => {
  return exports.isEndGame(hand) && hand.filter((card) => card !== null)[0].equals(24);
}