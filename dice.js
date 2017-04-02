/*
  Make a game that simulates dice rolls

  First, you'll make the dice randomly display
  a number from 1-6.

  Next you'll add some victory conditions.

*/


// Pro Tip: want to know if your function is working? call it inside console.log()!

// 1. Make the function randomDiceNumber return
// a random number from 1-6
function randomDiceNumber() {
    // Generate random number here
    // Hint: You'll need to use Math.random and Math.floor
    return Math.floor((Math.random() *6) + 1);
}

// 2. Update the function rollDice:
    //      a) use randomDiceNumber to get new values for the dice
    //      b) use jQuery to put those dice numbers on the webpage
    //      c) check for the outcome
    //      d) display a victory or loss on the webpage
function rollDice(){
    //      a) use randomDiceNumber to get new values for the dice
    //         hint: save them in variables
      var next1 = randomDiceNumber();
      var next2 = randomDiceNumber();
    //      b) use jQuery to put those dice numbers on the webpage
      $('#first-die').html(next1);
      $('#second-die').html(next2);
    //      c) check the outcome to see if the dice match
      if (next1 === next2) {
        showOutcome("Numbers match. You win!");
      } else {
        showOutcome("Numbers don't match. You lose.")
      }
    //      d) display a victory or loss on the webpage
    // 4. Add victory conditions (See instructions at top of the JS

}

$(document).ready(function(){
  // 3. Add a click handler to the roll button
  // So that new numbers appear on the dice
  // when the button is clicked.
  // Hint: Use the rollDice function
    $('input').click(rollDice);
});

function showOutcome(message) {
    // Step 4. Write message to the page
    $('.outcome').html('You win! '+message);
}


// BONUS!!!

// "Refactor" aka edit/improve your code:

// 1. Add more victory conditions:
// If one of the following victory condition is met
// display a message in the page stating why you won!
//     a. Each die has the same number (aka "doubles")
//     b. The sum of the two dies is 7
//     c. The sum of the two dies is 11
// 2. Create a new function that checks the two dice numbers
//     a. call it checkForVictory
//     b. have it take 2 parameters, dice1, and dice2
//     c. use it to return a string of the outcome message
//        from bonus step 1
function checkForVictory(dice1, dice2){
   if (dice1 === dice2) {
    return "Numbers match. You win!";
  } elsif (dice1 + dice2 === 7) {
    return "Numbers don't match. You lose.";
  } elsif (dice1 + dice2 === 11) {
    return 'You got 11.';
  } else {
    return 'Not a winner'
  }
}
