


var userNum = 0
var computerNum = Math.floor(Math.random() *101)+19;
var lost;
var win;

//4 crystals.  Each
for(var i = 0; i <4; i++){
    var random = Math.floor(Math.random() * 12)+1;
    var crystal = $("<img>");
        crystal.attr("class", 'crystal');
        crystal.attr("src", 'assets/images/blueie.jfif');
        crystal.attr("data-crystal", random);   
    $(".crystals").append(crystal);

    console.log(random);

}
//Each crystal should generate a random number between 1-12.  See random var above

//Random number at the start of the game

//Players score updated when crystal clicked
$(".crystal").on("click",function() {
    console.log("click");
    console.log($(this).data("crystal"));
    var crystalScore = $(this).data("crystal");
    userNum = userNum + crystalScore;
    console.log(userNum);
    
})


//Player wins if total score matches random number

//Game resets

//Player loses if total score goes over the random number

//Game resets

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




