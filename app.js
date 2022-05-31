
const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,

  play: function(){
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }

  getGuess: function() {
    let guess
      do {
        guess = parseInt(
        prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`)
      )} while (
        if (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
        )
      }
    }

  
console.log(game)


