//start page has instructions button and play button
    // if play button is clicked, get user name then go to game page and start game
        //remove display of starter page and display the game page

var playGameBtn = document.querySelector("#play");
var instructBtn = document.querySelector("#instruct");
var player;
var score = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var startGame = false;
var startGame = function(event){
//get input value(name) for use in msg
var nameField = document.querySelector("#input");
var name = nameField.value;
console.log(name);

//display:none
playGameBtn.classList.add("hide");
instructBtn.classList.add("hide");
nameField.classList.add("hide");
console.log("change DOM");

// call function to display gamepage
};
//add click event listener on play btn to start game
playGameBtn.addEventListener("click",startGame);
console.log(playGameBtn);




// if (gameStart == false) {
//     //display main page
//     //code block to addEventListener to start game
// }


//game pg (start game)

// gameStart = true;



    //back button - returns to previous page
    //1st photo and empty blocks or line below it (accdg to number of letters in the movie title)
    //random letters below lines or alphabet
        //on click of any letter populate title array
        //first letter push into first line
        //preceding letters push into end of array
        //click letters on array to remove that letter


    //check if correct
        //compare title array with name array in object (write function)
        //score ++ (write function to increment score & update score board-appendChild)
        //move to next qstn



// function checkAnswer() {
//   var userAnswer = "How are you doing today?";
//   var res = str.split(" ");
//   document.getElementById("demo").innerHTML = res;
// }

    //else,
        //title array - apply class - red letters
        //move to next qstn
        //score --

    //option to click "end" to close game
//last pg
    //tally score plus msg
        //msg depends on tiered score
    //re-start button

//object for movie questions
// var movieQns ={
// one: [" "],
// two:[]
// three:
// four:
// five:
// };
// console.log(movieQns.one);