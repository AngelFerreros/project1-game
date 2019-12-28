console.log("js working");

var player; //store name for msg later
var titleArray = [];//to store movie title as array
var score = 0;
var level = 0; //level counter
var letterHolder = []; //array to store blanks to fill
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var playGameBtn = document.querySelector("#play");
var container = document.querySelector(".container"); // to append gamepg
var img = document.createElement("img");
// var guessHolder = document.createElement("ul");

// array for movie questions (object)
var movieLvl = [
{ level: 0, title: "Titanic", img:"https://www.rd.com/wp-content/uploads/2018/09/Titanic-1024x683.jpg"},
{level:1, title:"Armageddon", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/db87f889-29f6-4cfd-8348-d29546474e46.jpg"},
{level: 2, title: "Avatar", img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/movie-question-30.jpg?q=50&fit=crop&w=963&h=448&dpr=1.5"},
{level:3, title:"Braveheart", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/37e77cfb-5788-491d-88ac-a9fb9f8bb72e.jpg"},
{level:4, title:"Speed", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/09ccfe9e-e428-4fda-a9bf-9e193f8e1c63.jpg"}
];
console.log(movieLvl[0].img);

var gameStart = false;

//start page has instructions button and play button
    // if play button is clicked, get user name then go to game page and start game

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

//create class for next btn
    var nextLvl = document.getElementById("next");
    nextLvl.classList.add(".nextBtn");
    nextLvl.innerHTML = "Next";
    gameStart = true;

//! FIX FUNCTIONS !
// call function to display gamepage
    displayImg();
    letterBtn();
    initialize();
};
//add click event listener on play btn to start game
playGameBtn.addEventListener("click",startGame);
console.log(playGameBtn);

console.log(level);
//function to display gamepg img
var displayImg = function(){
    var imgHolder = document.getElementById("movie-img");
    img.classList.add("img-fluid");
    img.src = movieLvl[level].img;
    imgHolder.appendChild(img);
};

//create alphabet btns
var letterBtn = function(){
    var letters = document.createElement("ul");
    letters.id = "alphabet";
        for (var i = 0; i < alphabet.length; i++) {
        var list = document.createElement("li");
        console.log(alphabet[i]);
        list.id = alphabet[i];
        list.innerHTML = alphabet[i];
        list.addEventListener("click",checkAnswer);
        alphabetBtn.appendChild(letters);
        letters.appendChild(list);
        }
};

// Create function to load array for letters to be guessed
var initialize = function(){
    var movieTitle = movieLvl[level].title;
    titleArray = movieTitle.split("");
    console.log(titleArray.length);
    var wordGuess;
    for (var j = 0; j < titleArray.length; j++) {
        letterHolder[j] = "_";
        console.log(letterHolder);
    }
    wordGuess = letterHolder;
    wordHolder.innerHTML = wordGuess;
};

//on click of letters,check if letterClicked is found in movieTitle.If yes, display
function checkAnswer(event) {
    var letterClicked = event.target.id;
    console.log(letterClicked);
        for (var e = 0; e < titleArray.length ; e++) {
        var correctLetter = titleArray[e].toLowerCase();
            if (letterClicked === correctLetter){
            var position = e;
            console.log(position);
            letterHolder[e] = correctLetter;
            wordGuess = letterHolder;
            wordHolder.innerHTML = wordGuess;
            }
        }
};

//onclick function for next level, remove previous guessHolder and append new guessHolder
var handleNext = function (event) {
    level += 1;
    console.log(level);
    img.src = movieLvl[level].img;
    resetLetters();
    // displayImg();
    initialize();

};

debugger;
// reset letters guessed
var resetLetters = function(){
    letterHolder = [];
    // var oldMovieTitle = titleArray;
    // var newMovieTitle = movieLvl[level].title;
    // console.log(oldMovieTitle);
    // console.log(newMovieTitle);
    // for (var d = 0; d < newMovieTitle.length; d++) {
    //     letterHolder[d] = "_" ;
    //     wordGuess = letterHolder;
    // }
    //     wordHolder.innerHTML = wordGuess;
    //     console.log(letterToDelete);
};


//calculate score
    // to display in score board and at end of game
    //every correct movie guess = 1 point (?)

//function to display end game msg
    //last pg
        //tally score plus msg
            //msg depends on tiered score

    //option to click "end" to close game