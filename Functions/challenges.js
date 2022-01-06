'use strict';

/* CHALLENGE #1 */
console.log("Challenge #1 Output ===> ");

//Select the Options for question and Update it
const poll = {
    question: "What is your favourite Programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const ans = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));
        console.log(ans);

        // isNaN(ans) === false && ans < this.answers.length ? this.answers[ans]++ : alert("Please choose valid answer!");
        isNaN(ans) === false && ans < this.answers.length && this.answers[ans]++;
        // console.log(this.answers);
        this.displayResults();
    },
    displayResults(){
        console.log(`Poll results are ${this.answers}`);
    }
};
// poll.registerNewAnswer();

//Call method whenever clicks poll button
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
// poll.displayResults();

poll.displayResults.call({answers:[5,2,3]});
poll.displayResults.call({answers:[1,5,3,9,6,1]});


/* CHALLENGE #2 */
console.log("Challenge #2 Output ===> ");

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    });
})(); //This function is worked because of Closure.