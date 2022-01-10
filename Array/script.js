'use strict';

//SLICE()
console.log("-----Array with .slice() & .splice() Method-----");
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log("Slicing Array ===>");
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(...arr));
console.log("After performed .slice Array won't changed ===> ",arr);

//SPLICE()
console.log("Splicing Array ===>");
console.log(arr.splice(2));
console.log("After performed .splice, Array changed into ===> ",arr);

//AT()
console.log("-----Array with .at() Method-----");
console.log("Parsing Index Value ===> ",arr[0]);
console.log("Using at() Method ===> ",arr.at(0));

//LOOP forEach
console.log("-----Array with forEach Loop-----");
const movements = [200, 450, -540, 3000, -650, -130, 70, 1200];

console.log("Using FOROF ===> ");
for (const [i,movement] of movements.entries()){
    if (movement>0){
        console.log(`Entry ${i+1}: You Deposited ${movement}`);
    }else{
        console.log(`Entry ${i+1}: You Withdrew ${Math.abs(movement)}`);
    }
}

console.log("using FOREACH ===> ");
movements.forEach(function(movement,i,arr){
    const entry = movement>0 ? `Entry ${i+1}: You Deposited ${movement}` : `Entry ${i+1}: You Withdrew ${Math.abs(movement)}`;
    console.log(entry);
});

//forEach with MAPs
console.log("FOREACH with MAPs ===>");
const currencies = new Map([
    ['RS','Rupees'],
    ['USD','United State Dollar'],
    ['EUR','Euro'],
]);

currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
});

//forEach with SETs
console.log("FOREACH with SETs ===>");
const currenciesUnique = new Set(['RS','USD','EUR','RS','EUR']);
currenciesUnique.forEach(function(value,_,set){
    console.log(`${value}:${value}`);
});

//using Filter methods
console.log("-----Map , Filter & Reduce -----");
console.log("Get Withdrawal data using Filter method ===>");
const withdrawals = movements.filter(mov => mov<0);
console.log(withdrawals);

//using Reduce method
console.log("Account balance using Reduce method ===>");

    //accumulator -> SNOWBALL
const balance = movements.reduce(function(acc,cur){
    return acc + cur;
}, 0);
console.log(balance);

    //Find Maximun
const max = movements.reduce((acc,mov)=> {
    if (acc>mov) return acc;
    else return mov;
});
console.log("Return Maximum deposit value ===>");
console.log(max);

//PIPLINE - Chaining Method

const eurToUsd = 1.1;

const totalDeopsitedUSD = movements.filter(mov => mov >0)
                                   .map(mov => mov * eurToUsd)
                                   .reduce((acc,mov)=> acc+mov, 0);
console.log(totalDeopsitedUSD);
