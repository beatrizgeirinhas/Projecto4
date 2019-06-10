$("#testbtn").click(function() {
  var ckbox = $("#checkbox");
  if (ckbox.is(":checked")) {
    document.getElementById("massa").style.display = "block";
    coins = coins - 4;
    $("#coins").text(coins);
    console.log(coins);
  } else {
    alert("Button was clicked before");
  }
});
