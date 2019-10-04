let words =["giraffe", "elefant", "cigarette", "lifespan", "javascript", "winc academy", "awkward", "oxygen", "zombie", "jukebox" ];

let guesses = [];
let lives = [10];

// picks random words from the array "words"
let randomword = words[Math.floor(Math.random() * words.length)];

for (let i = 0; i <words.length; i++){
    answer[i] = "_";}


while (lives > words.length){
    let guess = prompt("Guess a letter");

}

comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (let i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


  let $guessedLetters = document.getElementById("guessed-letters");
  let $leftGuessesCounter = document.getElementById("guesses");
  let $currentWord = document.getElementById("current-word");
  let $putLetter = document.getElementById("putLetter");