$(document).ready(function() {

$('.img').hover(function() {

  $(this).addClass('imgHover');
  }, function() {

    $(this).removeClass('imgHover');
  });


$('#rock').on('click', function() {
  var game = compare('rock', compRPS())
  $('.result').html(game);
});

$('#paper').on('click', function() {
  var game = compare('paper', compRPS())
  $('.result').html(game);
});

$('#scissors').on('click', function() {
  var game = compare('scissors', compRPS())
  $('.result').html(game);
});


//var me = prompt('Please choose: Rock, Paper, Scissors');

  //my random number
var compare = function(me, computer) {

    if (me === 'rock') {
        if(computer === 'rock') {
          return 'Draw';
        } else if (computer === 'paper') {
          return 'I lost! The paper wraps the rock!';
        } else if (computer === 'scissors') {
          return 'I won! The rock crushes scissors';
        }
      }

    else if (me === 'paper') {
        if(computer === 'rock') {
          return 'I won! The paper wraps the rock!';
        } else if (computer === 'paper') {
          return 'Draw';
        } else if (computer === 'scissors') {
          return 'I lost! Scissors cut the paper';
        }
      }

    else if (me === 'scissors') {
        if(computer === 'rock') {
          return 'I lost! The rock crushes scissors';
        } else if (computer === 'paper') {
          return 'I won! Scissors cut the paper';
        } else if (computer === 'scissors') {
          return 'Draw';
        }
      } else {
        return 'Something is wrong here!'
      }
   }



  // oppenent's random number

var compRPS = function() {
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
