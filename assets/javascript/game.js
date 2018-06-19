



var userNum = 0
//Random number between 19 and 120 at the start of the game
var computerNum = Math.floor(Math.random() * 101) + 19;
var lost = 0;
var win = 0;


//4 crystals.  Each crystal will generate a random number between 1-12.

//Game reset
var startGame = function () {
    $(".crystals").empty();

    $("#result").html('Random Result: ' + computerNum);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        var crystal = $("<img>");
        crystal.attr("class", 'crystal');
        // crystal.attr("src", 'assets/images/blueie.jfif');

        var imageArray = ['assets/images/blueie.jfif','assets/images/greengem.jpg','assets/images/pink-gem.png','assets/images/photogemsapphire.jpg'];

//Couldn't get my array of images to work

        var imageIndex = 0;
        crystal.attr("src", imageArray[imageIndex]);
        imageIndex = (imageIndex + 1) % imageArray.length;
        crystal.attr("data-crystal", random);
        $(".crystals").append(crystal);
        crystal.html(random);
        console.log(random);
    }
    $("#userNum").html("Total score: " + userNum);
}

//Game reset
startGame();

//Players score updated when crystal clicked

$(document).on('click', ".crystal", function () {
    console.log("click");
    console.log($(this).data("crystal"));
    var crystalScore = $(this).data("crystal");
    userNum = userNum + crystalScore;
    console.log(userNum);

    $("#userNum").html("Total score: " + userNum);

    //Player loses if total score is more than random number. 
    // Shows number of losses
    if (userNum > computerNum) {
        lost++;
        console.log("You lost!");
        $("#lost").html("You lost " + lost);
        userNum = 0;
        computerNum = Math.floor(Math.random() * 101) + 19;
//Game reset
        startGame();
    }
    //Player wins if total score matches random number. 
    // Shows number of wins
    else if (userNum === computerNum) {
        win++;
        console.log("You won!");
        $("#win").html("You won " + win);
        userNum = 0;
        computerNum = Math.floor(Math.random() * 101) + 19;
// Game reset        
        startGame();
    }
});






