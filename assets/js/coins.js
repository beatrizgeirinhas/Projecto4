var coins = 4;
$("#coins").text(coins);

$("#button").click(function() {
  var number = Math.floor(Math.random() * 5 + 1);
  if (number == 1) {
    coins = 4;
  } else {
    coins = coins - 4;
  }
  $("#coins").text(coins);
});

$("#button1").click(function() {
  var number = Math.floor(Math.random() * 5 + 1);
  if (number == 1) {
    coins = 4;
  } else {
    coins = coins - 4;
  }
  $("#coins").text("Coins: " + coins);
});

$("#button2").click(function() {
  var number = Math.floor(Math.random() * 5 + 1);
  if (number == 1) {
    coins = 4;
  } else {
    coins = coins + 1;
  }
  $("#coins").text("Coins: " + coins);
});

$("#button3").click(function() {
  var number = Math.floor(Math.random() * 5 + 1);
  if (number == 1) {
    coins = 4;
  } else {
    coins = coins + 2;
  }
  $("#coins").text("Coins: " + coins);
});
