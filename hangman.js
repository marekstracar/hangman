class Hangman {
	constructor (word, attempts) {
		this.word = word;
		this.attempts = attempts;
		this.guessedWord = [];
	}

	useAttempt () {
		this.attempts--;
	}

	hasAttempts () {
		return this.attempts;
	}

	isWordComplete () {
		return this.word === this.guessedWord.join("");
	}

	isContainingLetter (letter) {
		return Array.from(this.word).includes(letter);
	}

	fillGapsWithLetter (guessedLetter) {
		Array.from(this.word).map((letter, index) => {
			if (letter === guessedLetter) {
				this.guessedWord[index] = guessedLetter;
			}
		})
	}
}