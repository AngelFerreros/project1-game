console.log("js working");
//start page has instructions button and play button
    // if play button is clicked, get user name then go to game page and start game
        //remove display of starter page and display the game page

var playGameBtn = document.querySelector("#play");
var container = document.querySelector(".container"); // to append gamepg
var player; //store name for msg later
var score = 0;
var level = 0; //level counter
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guesses = []; //array to store player guess of letters

var gameStart = false;

//function to display gamepg img
var displayImg = function(){
    var imgHolder = document.getElementById("img");
    var img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = movieLvl[0].img;
    imgHolder.appendChild(img);
};

//create alphabet btns
var letterBtn = function(){
    var letters = document.createElement("ul");
    letters.id = "alphabet";
        for (var i = 0; i < alphabet.length; i++) {
        var list = document.createElement("li");
        console.log(alphabet[i]);
        list.id = "letter";
        list.innerHTML = alphabet[i];

        alphabetBtn.appendChild(letters);
        letters.appendChild(list);
        }
};
// Create guesses ul
var result = function(){
    // var wordHolder = document.createElement("div");
    var correctGuess = document.createElement("ul");
    var movieTitle = movieLvl[level].title;
    console.log(movieTitle.length);
    for (var j = 0; j < movieTitle.length; j++) {
      guess = document.createElement("li");
      guess.id = "letter "+ j;
      console.log(guess.id);
      guess.innerHTML = "_ ";

    guesses.push(guess);
    wordHolder.appendChild(correctGuess);
    correctGuess.appendChild(guess);
    wordHolder.classList.add("guessArray");
    }
  }

//onclick function for next level
var handleNext = function (event) {
    if ((level+1)<= movieLvl.length-1){
    level = level ++;
    console.log(level);
    }
    else {
    alert ("Game over!")
    }
};

//function to hide main page and callback other functions to display game board pg
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
    displayImg();
    letterBtn();
    result();

//create class for next btn
    var nextLvl = document.getElementById("next");
    nextLvl.classList.add(".nextBtn");
    nextLvl.innerHTML = "Next";
    gameStart = true;
};
//add click event listener on play btn to start game
playGameBtn.addEventListener("click",startGame);
console.log(playGameBtn);




    //back button - returns to previous page
    //1st photo and empty blocks or line below it (accdg to number of letters in the movie title)
    //random letters below lines or alphabet
        //on click of any letter populate title array

    // element.addEventListener("click", FUNCTION TO POPULATE ARRAY);



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
var movieLvl = [
{ level: 1, title: "Titanic", img:"https://www.rd.com/wp-content/uploads/2018/09/Titanic-1024x683.jpg"},
{level: 2, title: "Avatar", img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/movie-question-30.jpg?q=50&fit=crop&w=963&h=448&dpr=1.5"},
{level:3, title:"Armageddon", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/db87f889-29f6-4cfd-8348-d29546474e46.jpg"},
{level:4, title:"Braveheart", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/37e77cfb-5788-491d-88ac-a9fb9f8bb72e.jpg"},
{level:5, title:"Speed", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/09ccfe9e-e428-4fda-a9bf-9e193f8e1c63.jpg"}
];
console.log(movieLvl[0].img);