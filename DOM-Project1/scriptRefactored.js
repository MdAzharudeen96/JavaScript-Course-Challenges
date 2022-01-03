'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+1; //trunc will return the float value into int
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //When there is no input
    if (!guess){
        // document.querySelector('.message').textContent = "Plese Choose Number.";
        displayMessage("Please Choose Number.");
    //When player Won
    } else if (guess === secretNumber ){
        // document.querySelector('.message').textContent = "Correct Number!";
        displayMessage("Correct Number!");
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //When guess is wrong
    }else if (guess!==secretNumber){
        if (score>1){
            // document.querySelector('.message').textContent = guess>secretNumber ? "Number too high!" : "Number too low!";
            displayMessage(guess>secretNumber ? "Number too high!" : "Number too low!");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = "Ho no... You lost!";
            displayMessage("Ho no... You lost!");
            document.querySelector('.score').textContent = 0; 
        }
    }
}); 

//My challenge Part
document.querySelector('.again').addEventListener
('click',function(){
    score = 20
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.number').style.width = "15rem";
    secretNumber = Math.trunc(Math.random() * 20)+1;
    // document.querySelector('.message').textContent = "Start Guessing...";
    displayMessage("Start Guessing...");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
})
