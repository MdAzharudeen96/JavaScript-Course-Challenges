'use strict';

/* CHALLENGE #1 */

console.log("-----Challenge #1 Output-----");

const checkDogs = function (dogsJulia, dogsKate){
    const dogsJuliaCopy = dogsJulia;
    dogsJuliaCopy.splice(0,1);
    dogsJuliaCopy.splice(-2);
    console.log("After removed Cat ages ===>");
    console.log(dogsJuliaCopy);

    const totalDogs = dogsJuliaCopy.concat(dogsKate);
    console.log("Concatinating Dogs data ===>");
    console.log(totalDogs);

    console.log("Find whether dog is an Adult or Puppy ===>");
    totalDogs.forEach(function(dog,i){
        const dogAge = dog >=3 ? `Dog number${i+1} is an Adult & is ${dog} years old` : `Dog number${i+1} is still a Puppy`;
        console.log(dogAge);
    });
};

// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

/* CHALLENGE #2 */

console.log("-----Challenge #2 Output-----");

const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(dogAge => dogAge<=2 ? 2*dogAge : 16+dogAge*4);
    console.log(`Calculated the Dog age in Human Years ===> ${humanAges}`);

    const adults = humanAges.filter(dogAge => dogAge>18);
    console.log(`Excluded Puppies which less than 18 human years ===> ${adults}`);

    const averageHuman = adults.reduce((acc,dogAge) => acc+dogAge) / adults.length;
    console.log(`Average human age of all Adult dogs ===> ${averageHuman}`);
};
// calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16,6,10,5,6,1,4]);

/* CHALLENGE #3 */

console.log("-----Challenge #3 Output-----");

const newCalcAverageHumanAge = function(ages){
    const humanAges = ages.map(dogAge => dogAge<=2 ? 2*dogAge : 16+dogAge*4)
                          .filter(dogAge => dogAge>18)
                          .reduce((acc,dogAge,i,arr) => acc+dogAge / arr.length, 0);
    console.log(`Average human age of all Adult dogs ===> ${humanAges}`);
}
// newCalcAverageHumanAge([5,2,4,1,15,8,3]);
newCalcAverageHumanAge([16,6,10,5,6,1,4]);

/* CHALLENGE #4 */
console.log("-----Challenge #4 Output-----");

const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']}, 
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']}, 
    {weight: 32, curFood: 340, owners: ['Michael']},
    ];

//Calculated the Recommended food for dogs
dogs.forEach(dog => (
dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)
));
console.log("After Calculated Recommended food ===>");
console.log(dogs);

//finding How much they eat
console.log("Is saraha's dog eat too much or too little ===>");
const dogOwner = dogs.find(sarasdog => sarasdog.owners.includes('Sarah'));
console.log(dogOwner);
const foodEat = dogOwner.curFood > dogOwner.recommendedFood ? 'much' : 'little';
console.log(`Sarah's dog eating too ${foodEat}`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood>dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood<dog.recommendedFood).flatMap(dog => dog.owners);
console.log("Owner too much Eating is: ",ownersEatTooMuch);
console.log("Owner too little Eating is: ",ownersEatTooLittle);


//sting formated output
console.log("String formated Output ===>");
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//Which dog eat exactly same food
const sameFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log("Is any dog eat exactly same food is ===>", sameFood);

//is any dog eating an okay amount of food
const isOkay = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log("Is any dog eating ann Okay amount of food ",isOkay);

//Create shallow copy of dogs and short
const dogsSort = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("After Dogs get sorted ===>");
console.log(dogsSort);
                    