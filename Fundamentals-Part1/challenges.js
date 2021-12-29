/*  FUNDAMENTAL PART -1 */

// Challenge #1

/*//Data1
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn **2;
const markHigherBMI = BMIMark > BMIJohn;

console.log("Challenge #1 Output ==>");
console.log(BMIMark, BMIJohn, markHigherBMI);

// Challenge #2

console.log("Challenge #2 Output ==>");

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}

// Challenge #3

/*//Data1
const scoreDolphins = (97+112+101)/3;
const scoreKoalas = (109+95+50)/3;*/

const scoreDolphins = (97+112+101)/3;
const scoreKoalas = (109+95+106)/3;
console.log("Challenge #3 Output ==>");
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >=100){
    console.log("Dolphins won the Trophy.");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas won the Trophy");
}else if (scoreKoalas == scoreDolphins && scoreDolphins>=100 && scoreKoalas>=100){
    console.log("Dolphin & Koala both won Trophy");
}else{
    console.log("No one won the Trophy");
}

// Challenge #4
const bill = 430;
const tip = bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
console.log("Challenge #4 Output ==>");
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);