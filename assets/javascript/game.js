var randomNum = 18 + Math.floor(Math.random() * 120);

$("#numToGuess").html(randomNum);
console.log(randomNum);


var blueGem = 1 + Math.floor(Math.random() * 12);
var pinkGem = 1 + Math.floor(Math.random() * 12);
var greenGem = 1 + Math.floor(Math.random() * 12);
var purpleGem = 1 + Math.floor(Math.random() * 12);


var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);


var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    blueGem = 1 + Math.floor(Math.random() * 12);
    pinkGem = 1 + Math.floor(Math.random() * 12);
    greenGem = 1 + Math.floor(Math.random() * 12);
    purpleGem = 1 + Math.floor(Math.random() * 12);
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("YAY! You won!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("You Lost! Try Again!");
        $("#losses").html(losses);
        reset();
    }
};


$("#purple").on("click", function() {
    userTotal = userTotal + purpleGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#green").on("click", function() {
    userTotal = userTotal + greenGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#pink").on("click", function() {
    userTotal = userTotal + pinkGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#blue").on("click", function() {
    userTotal = userTotal + blueGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})