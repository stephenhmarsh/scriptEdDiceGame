/*
  Make a game that simulates dice rolls

  First, you'll make the dice randomly display
  a number from 1-6.

  Next you'll add some victory conditions.

*/

// 1. Make the function randomDiceNumber return
// a random number from 1-6
function randomDiceNumber() {
    // Generate random number here
    // Hint: You'll need to use Math.random and Math.floor
    return Math.floor((Math.random() *6) + 1);
}

function showVictory(message) {
    // Step 4. Write message to the page
    $('.victory').html('You win! '+message);
}


function rollDice(){
    // 2. Update the function rollDice to:
    //      a) use randomDiceNumber to get new values for the dice
    //      b) use jQuery to write the new values to the dice
    var next1 = randomDiceNumber();
    var next2 = randomDiceNumber();
    $('#first-die').html(next1);
    $('#second-die').html(next2);

    // 4. Add victory conditions (See instructions at top of the JS)
    // If one of the following victory condition is met
    // display a message in the page stating why you won!
    //     a. Each die has the same number (aka "doubles")
    //     b. The sum of the two dies is 7
    //     c. The sum of the two dies is 11
    if (next1 === next2) {
        showVictory('Numbers match.');
    }

    if (next1 + next2 === 7) {
        showVictory('You got 7.');
    }

    if (next1 + next2 === 11) {
        showVictory('You got 11.');
    }
}

$(document).ready(function(){
  // 3. Add a click handler to the roll button
  // So that new numbers appear on the dice
  // when the button is clicked.
  // Hint: Use the rollDice function
    $('input').click(rollDice);
});
