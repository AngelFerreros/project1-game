console.log("js working");

var player; //store name for msg later
var titleArray = [];//to store movie title as array
var score = 0;
var level = 0; //level counter
var letterHolder = []; //array to store blanks to fill
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var counter = 60;//countdown timer- 60sec for whole game


// array for movie questions/level
var movieLvl = [
{level: 0, title: "Titanic", img:"https://www.rd.com/wp-content/uploads/2018/09/Titanic-1024x683.jpg", gameOverMsg: `Sorry, you ran out of time! The correct answer is Titanic.`},
{level:1, title:"Armageddon", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/db87f889-29f6-4cfd-8348-d29546474e46.jpg", gameOverMsg: `Sorry, you ran out of time! The correct answer is Armageddon.`},
{level: 2, title: "Avatar", img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/movie-question-30.jpg?q=50&fit=crop&w=963&h=448&dpr=1.5", gameOverMsg: `Sorry, you ran out of time! The correct answer is Avatar.`},
{level:3, title:"Braveheart", img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/dd309a21-0df8-4d22-8d0c-3599b0fae15c/37e77cfb-5788-491d-88ac-a9fb9f8bb72e.jpg", gameOverMsg: `Sorry, you ran out of time! The correct answer is Braveheart.`},
{level:4, title:"Whiplash", img: "https://m.media-amazon.com/images/M/MV5BYjZlMDkyY2MtNmY4ZS00YTJjLTkzMjgtNWQ1MTBlN2QyYmM1XkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg", gameOverMsg: `Sorry, you ran out of time! The correct answer is Whiplash.`}
];
console.log(level);
console.log(movieLvl[0].img);

//start page has instructions button and play button
    // if play button is clicked, get user name then go to game page and start game

//function to hide main page and callback other functions to display game board pg
var playGameBtn = document.querySelector("#play");
var playGame = function(event){
//get input value(name) for use in game over msg
    var nameField = document.getElementById("input");
    var name = nameField.value;
    console.log(name);
    player = name;

//hide main page elements
    var starterField = document.getElementById("starter");
    starterField.classList.add("hide");
    console.log("hide buttons");

//change background image
    document.body.style.backgroundImage = "url('img/carpet.png')";

// call functions to play game
    displayImg();
    letterBtn();
    initialize();

//create class for next btn
    var nextLvl = document.getElementById("next");
    nextLvl.classList.remove("hide");
    nextLvl.classList.add("nextBtn");

//timer starts
    document.getElementById("countdown-timer").classList.remove("hide");
    timerId = setInterval(updateTimer, 1000);
};

//add click event listener on play btn to start game
playGameBtn.addEventListener("click",playGame);

// countdown once game starts
//once timer = 0 seconds, game over

var updateTimer = function() {
    var displayTimer = document.getElementById("countdown-timer");
    displayTimer.classList.add(".timerStyle");

    if (counter <= 60 && counter != 0) {
    displayTimer.innerHTML = ` Timer:\n 00:${counter}`;
    counter--;
    console.log(counter);
    }
    else if (counter === 0) {
    displayTimer.innerHTML = "Time's up!";
    console.log("Game Over");
    clearInterval(timerId);
    }
    gameOver();
};

//function to display movie img
var img = document.createElement("img");
var displayImg = function(){
    var imgHolder = document.getElementById("movie-img");
    img.classList.add("img-fluid");
    img.src = movieLvl[level].img;
    imgHolder.appendChild(img);
};

//create alphabet btns
var letterBtn = function(){
        var alphabetHolder = document.createElement("ul");
        for (var i = 0; i < alphabet.length; i++) {
        var list = document.createElement("li");
        console.log(alphabet[i]);
        list.id = alphabet[i];
        list.innerHTML = alphabet[i];
        list.addEventListener("click",checkAnswer);
        alphabetHolder.appendChild(list);
        alphabetBtn.appendChild(alphabetHolder);
        }
};

// Create function to load array for letters to be guessed
var initialize = function(){
    var movieTitle = movieLvl[level].title;
    titleArray = movieTitle.split("");
    console.log(titleArray.length);
    var wordGuess=""; //to store letterHolder as text and display in wordHolder div
    for (var j = 0; j < titleArray.length; j++) {
        letterHolder[j] = "_";
        console.log(letterHolder);
    }
    wordGuess = letterHolder.join(" ");
    wordHolder.innerHTML = wordGuess;
    wordHolder.classList.add("underscores");
};

//on click of letters,check if letterClicked is found in movieTitle.If yes, display.
//else every wrong letter guessed = -3 seconds
// debugger;
var wordGuessArray = []; //for answer verification
function checkAnswer(event) {
    var letterClicked = event.target.id;
    console.log(letterClicked);
    for (var e = 0; e < titleArray.length ; e++) {
        var correctLetter = titleArray[e].toLowerCase();
            if (letterClicked === correctLetter){
            var position = e;
            console.log(position);
            letterHolder[e] = correctLetter;
            wordGuess = letterHolder.join(" ");
            wordHolder.innerHTML = wordGuess;
            }
        wordGuessArray = letterHolder;
        console.log(wordGuessArray);
    }
        if (titleArray.includes(letterClicked) === false) {
        console.log(titleArray);
        counter = counter - 3;
        console.log(counter);
        }
};

//if letterHolder is empty or incomplete, alert to make guesses
//convert wordGuess string into array for comparison with letterHolder
//else move to the next level - change image and re-initialize
var handleNext = function (event) {
    if ((letterHolder === wordGuessArray) && (letterHolder.includes("_") == false)){
            level += 1;
            console.log(level);
            img.src = movieLvl[level].img;
            resetLetters();
            initialize();
        }
    else {
            alert(`Please make a guess!`);
        }
};

// reset letters guessed
var resetLetters = function(){
    letterHolder = [];
};

        // if time's up, hide elements and display game over msg
        //else, display congratulations msg, use player name if there is input
        //"Play again" button in both cases
            //on click,return to main page to play again
// debugger;
function gameOver() {
    var playAgain = document.getElementById("restart");
    if (counter <= 0 && level >= 0) {
        document.getElementById("next").classList.add("hide");
        document.getElementById("alphabetBtn").classList.add("hide");
        document.getElementById("wordHolder").innerHTML = movieLvl[level].gameOverMsg;
        wordHolder.removeAttribute("class");
        wordHolder.classList.add("endgameMsg");
        playAgain.classList.remove("hide");
        playAgain.classList.add("restartBtn");
        playAgain.innerHTML = "Play Again";
    }
    if (level >4) {
        document.getElementById("next").classList.add("hide");
        document.getElementById("alphabetBtn").classList.add("hide");
        document.getElementById("movie-img").classList.add("hide");
        document.getElementById("countdown-timer").classList.add("hide");
            if (player != "") {
            document.getElementById("wordHolder").innerHTML = `Well done, ${player}! You are a certified cinephile.`;
            }
            else {
            document.getElementById("wordHolder").innerHTML = `Well done, you movie buff!`;
            }
        clearInterval(timerId);
        wordHolder.classList.add("winMsg");
        playAgain.classList.remove("hide");
        playAgain.classList.add("restartBtn");
        playAgain.innerHTML = "Play Again";
    }
};

function restartGame (){
    window.location.reload();
    console.log(`restart game`);
};
document.getElementById("restart").addEventListener("click", restartGame);