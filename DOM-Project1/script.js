'use strict';

// Course Program
let secretNumber = Math.trunc(Math.random() * 20)+1; //trunc will return the float value into int
let score = 20;

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //When there is no input
    if (!guess){
        document.querySelector('.message').textContent = "Plese Choose Number.";

    //When player Won
    } else if (guess === secretNumber ){
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber;

    //When guess is high
    } else if (guess > secretNumber){
        if (score>1){
            document.querySelector('.message').textContent = "Number too high!";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Ho no... You lost!";
            document.querySelector('.score').textContent = 0; 
        }
     
    //When guess is low
    }else if (guess < secretNumber){
        if (score>1){
            document.querySelector('.message').textContent = "Number too low!";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Ho no... You lost!";
            document.querySelector('.score').textContent = 0;
        }    
    }
}); 

/*// My Version
const secretNumber = Math.trunc(Math.random() * 20)+1; //trunc will return the float value into int
let score = 20;

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //When there is no input
    if (!guess){
        document.querySelector('.message').textContent = "Plese Choose Number.";

    //When there is input
    } else{
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.color = "white";
        //When player Won
        if (guess === secretNumber ){
            document.querySelector('.message').textContent = "Correct Number!";
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.number').style.color = "black";
        //When guess is high
        } else if (guess > secretNumber){
            if (score>1){
                document.querySelector('.message').textContent = "Number too high!";
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = "Ho no... You lost!";
                document.querySelector('.score').textContent = 0; 
            }
         
        //When guess is low
        }else if (guess < secretNumber){
            if (score>1){
                document.querySelector('.message').textContent = "Number too low!";
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = "Ho no... You lost!";
                document.querySelector('.score').textContent = 0;
            }    
        }
    }
});*/

