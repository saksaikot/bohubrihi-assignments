import NumberGuess from "./NumberGuess.js";

const q = (selector) => document.querySelector(selector);

const nodes = {
  messageDiv,
  chanceDiv,
  resultDiv,
  userInput,
  checkButton,
  playButton,
};
const numberGuess = new NumberGuess(nodes);
