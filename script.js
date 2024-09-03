var countDownDate = new Date("September 21, 2024 06:51:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("1").innerHTML = "Time until new trains:"+"<br>"+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + "<br>";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("1").innerHTML = "EXPIRED";
  }
}, 1000);

var countDownDate2 = new Date("Sep 3, 2024 8:55:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate2 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("2").innerHTML = "Time until school happens again:"+"<br>"+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + "<br>";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("2").innerHTML = "EXPIRED";
  }
}, 1000);

var countDownDate3 = new Date("Nov 5, 2024 0:0:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate3 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("3").innerHTML = "Time until my existence hopefully"+"<br>"+"doesn't get outlawed: "+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + "<br>";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("3").innerHTML = "EXPIRED";
  }
}, 1000);