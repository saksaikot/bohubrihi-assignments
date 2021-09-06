class NumberGuess {
  constructor({
    messageDiv,
    chanceDiv,
    resultDiv,
    userInput,
    checkButton,
    playButton,
  }) {
    this.nodes = {
      messageDiv,
      chanceDiv,
      resultDiv,
      userInput,
      checkButton,
      playButton,
    };
    checkButton.disabled = true;
    playButton.addEventListener("click", () => this.start());
    checkButton.addEventListener("click", () => this.check());
    messageDiv.style.visibility = "hidden";
    resultDiv.style.visibility = "hidden";
  }
  check() {
    messageDiv.style.visibility = "visible";
    const userGuess = parseInt(this.nodes.userInput.value);
    if (isNaN(userGuess)) return;
    this.chances--;
    this.nodes.chanceDiv.textContent = this.chances;
    this.userGuesses.push(userGuess);
    switch (true) {
      case userGuess === this.randomNumber:
        this.userWin = true;
        this.nodes.messageDiv.textContent = "You guessed the correct number";
        this.gameFinished();
        break;
      case userGuess > this.randomNumber:
        this.nodes.messageDiv.textContent = "You guessed more";

        break;
      default:
        this.nodes.messageDiv.textContent = "You guessed less";
    }
    if (this.chances < 1) {
      this.gameFinished();
    }
  }
  gameFinished() {
    resultDiv.style.visibility = "visible";

    playButton.disabled = false;
    checkButton.disabled = true;

    playButton.textContent = "Play again";
    this.nodes.resultDiv.textContent = this.userWin ? "You won" : "You lost";
  }

  randomNumberBetween(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  start() {
    this.randomNumber = this.randomNumberBetween(1, 10);
    this.chances = 3;
    this.userGuesses = [];
    this.userWin = false;
    checkButton.disabled = false;
    playButton.disabled = true;
    resultDiv.style.visibility = "hidden";
    messageDiv.style.visibility = "hidden";
    this.nodes.userInput.value = "";
  }
}
export default NumberGuess;
