console.log("js working");
//start page has instructions button and play button
    // if play button is clicked, get user name then go to game page and start game
        //remove display of starter page and display the game page

var playGameBtn = document.querySelector("#play");
var player; //store name for msg later
var score = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var answer = []; //array for player answer
var gameStart = false;


//function to display gamepg
var displayGame = function(){
    var container = document.querySelector(".container"); // to append gamepg
    var img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = movieQns[0].img
    container.appendChild(img);
debugger;
    var buttons = document.createElement("div");
    var letters = document.createElement("ul");
        for (var i = 0; i < alphabet.length; i++) {
        var list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i]; //!alphabet not displaying!
        container.appendChild(buttons);
        container.appendChild(letters);
        }
};

//function to hide main page and callback displayGame func
var startGame = function(event){
//get input value(name) for use in msg
    var nameField = document.querySelector("#input");
    var name = nameField.value;
    console.log(name);
    player = name;

//hide main page elements - display:none
    var starterField = document.getElementById("starter");
    starterField.classList.add("hide");
    console.log("hide buttons");

// call function to display gamepage
    displayGame();
    gameStart = true;
};
//add click event listener on play btn to start game
playGameBtn.addEventListener("click",startGame);
console.log(playGameBtn);



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

    //else,
        //title array - apply class - red letters
        //move to next qstn
        //score --
// }

    //option to click "end" to close game
//last pg
    //tally score plus msg
        //msg depends on tiered score
    //re-start button

//sample array for movie questions (object)
var movieQns = [
{ question: 1, title: "Fast and Furious", img:"https://cdn3.whatculture.com/images/2019/02/a386635853d7653b-600x338.jpg"},
{question: 2, title: "Star Wars", img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/movie-question-18-e1522270497513.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"}
];
console.log(movieQns[0].img);