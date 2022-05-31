
const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,

  getGuess: function() {
    let guess 
      while(!guess || guess > this.biggestNum || guess < this.smallestNum) {
        guess = parseInt(prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`))
        if ()
      }
    }

  }
  play: function(){
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
  
  

console.log(game)


