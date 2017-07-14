$(document).ready(function() {

$('.result').html(compare);
var me = prompt('Please choose: Rock, Paper, Scissors');

  //my random number
var compare = function(me, opponent) {
//  var me = prompt('Please choose: Rock, Paper, Scissors');
    if (me === 'rock') {
        if(opponent === 'rock') {
          return 'Tie';
        } else if (opponent = 'paper') {
          return 'I lost! The paper wraps the rock!';
        } else if (opponent = 'scissors') {
          return 'I won! The rock crushes scissors';
        }
      }

    else if (me === 'paper') {
        if(opponent === 'rock') {
          return 'I won! The paper wraps the rock!';
        } else if (opponent = 'paper') {
          return 'Tie';
        } else if (opponent = 'scissors') {
          return 'I lost! Scissors cut the paper';
        }
      }

    else if (me === 'scissors') {
        if(opponent === 'rock') {
          return 'I lost! The rock crushes scissors';
        } else if (opponent = 'paper') {
          return 'I won! Scissors cut the paper';
        } else if (opponent = 'scissors') {
          return 'Tie';
        }
      }
    }



  // computed random number

var opponent = function() {
  var random = Math.floor(Math.random()*3+1);

    if (random === 1) {
      return 'rock';
    } else if (random === 2) {
      return 'paper';
    } else if (random === 3) {
      return 'scissors';
  }
}

});
