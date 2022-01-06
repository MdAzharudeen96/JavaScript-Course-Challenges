'use strict';

//Enhanced object literals (Restructuring)
const openingHours = {
        Thurs: {
            open: 12,
            close:22,
        },
        Fri: {
            open: 11,
            close: 23,
        },
        Sat: {
            open: 0, //24 hours
            close: 24,
        }
};

// Data need for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Ekkatuthangal, Chennai",
    categories: ['Italian', 'Briyani', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Mutton Briyani','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Briyani','Risotto'],
    /*openingHours : {
        thu: {
            open: 12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //24 hours
            close: 24,
        }
    },*/
    openingHours, //enhanced the global variable (name should be same)
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex=1, mainIndex=0,time="20:00", address}){
        //calling the functions
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    orederPasta: function(ing1,ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...ohterIngredients){
        console.log("Rest operator Real-time output ===> ")
        console.log(mainIngredient);
        console.log(ohterIngredients);
    },
};

/* DESTRUCTURING ARRAY*/
//Method 1: Switch Variables
let [main, secondary] = restaurant.categories;
console.log("Switching variables with regular method ===>");
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Method 2:
[main, secondary] = [secondary, main];
console.log("Method 2 for switching variables ===>")
console.log(main, secondary)

//Receive two return values from a fn/-
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

//Destructuring nested Array - Example
const nested = [2, 4, [5,6]];
let i, j, k;
[i, , j] = nested;
console.log("Before Destructuring ===> ",i,j);
[i, , [j, k]] = nested;
console.log("After Destructuring ===> ", i, j, k); //5,6 are separated

//Default values - Example
let p,q,r;
[p, q, r] = [8,9];
console.log("Undefined value ===> ", p, q, r);

[p=1, q=1, r=1] = [8,9];
console.log("Took Default value ===> ", p, q, r);


/* DESTRUCTURING OBJECT*/

const {name, hours, categories} = restaurant;
console.log("Before Destructuring the Objects ===> ", name, hours, categories);

const {
    name: restaurantName,
    openingHours: Hours,
    categories: Tags,
} = restaurant;
console.log("After Destructuring the Objects ===> ", restaurantName, Hours, Tags);

//set default value to the object
const {menu, starterMenu: Starters = [] } = restaurant;
console.log("Undefined object ===>",menu, Starters);

//Mutating variables - Example
let a = 111;
let b = 999;
const obj = {a:23, b:27, c:14};
// {a,b} = obj;  - It raise error
({a, b} = obj);
console.log("Mutating variables with object ===> ",a,b);

//Destructuring nested Objects
let {Fri} = openingHours;
console.log("Entire sub object ===> ",Fri);

({Fri : {open, close},} = openingHours);
console.log("Values of sub object (open, close) ===> ",open, close);

//calling the object
console.log("Pass all the arguments ===>");
restaurant.orderDelivery({
    time: "22:30", address: "Guindy-Chennai", mainIndex: 2, starterIndex:2
});

console.log("Destructuring ===> ");
restaurant.orderDelivery({
    address: "Ekkatuthangal-Chennai", starterIndex:1
})

// SPREAD, because on RIGHT side of = 
//Spread Operator - Example
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log("Without using Spread Operator ===> ", badArr);

const gudArr = [1, 2, ...arr];
console.log("With using Spread Operator ===> ", gudArr);
console.log("Printing values using Spread Operator ===> ", ...gudArr);

//updating restaurent using spread operator - Example
const newMenu = [...restaurant.mainMenu, 'Fish Fry'];
console.log("After updating Menu in restaurant ===> ",newMenu);

//copy array using spread operator - Example
const mainMenuCopy = [...restaurant.mainMenu];
console.log("Copying mainMenu to new Variable ===> ",mainMenuCopy);

//Join 2 Array using spread operator - Example
const joinMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log("Joining 2 arrays using Spread Operator ===> ",joinMenu);

//Iterables: arrays, strings, maps, sets. Not Objects
/*const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3")
];

console.log("Make Pasta without Spread Operator ===> ");
restaurant.orederPasta(ingredients[0], ingredients[1], ingredients[2]);
console.log("Make Pasta with Spread Operator ===> ");
restaurant.orederPasta(...ingredients);*/


//objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder:'Md.Azhar'};
console.log("New Restaurant ===> ",newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log("Copied Restaurant Name ===> ", restaurantCopy.name);
console.log("Original Restaurant Name ===>", restaurant.name);


// REST, because on LEFT side of =
// Rest - Example
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log("REST Example output ===> ",x,y,others);

// Real time example
restaurant.orderPizza("Mushrooms","Onion","Olives","Spinach");
restaurant.orderPizza("Musroom");


//Nullish coalescing operator
const guests = restaurant.numGuests || 10;
console.log("Using Logic operator ===> ",guests);

const guestCorrect = restaurant.numGuests ?? 10; //Nullish: null and undefined (NOT 0 or '')
console.log("Using Nullish Operator ===> ",guestCorrect);

//for-of Loop
const forMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("Print menu using for-of Loop ===> ")
for (const item of forMenu) console.log(item);

//Optional Changing ?
const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
console.log("List Opening time using Optional Changing operator ===> ");

for(const day of days){
    // console.log(day);
    //const open = restaurant.openingHours[day]?.open || "Closed";
    const open = restaurant.openingHours[day]?.open ?? "Closed";
    console.log(`On ${day}, we open at ${open}.`);
}

//Property Names get by using Object.keys
const properties = Object.keys(openingHours);

console.log("Get Property names by using Object Keys ===> ")
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties){
    openStr += `${day},`;
}
console.log(openStr);

//Property Values get by using Object.values
const values = Object.values(openingHours);
console.log("Get the Property Values by using Object Values ===> ");
console.log(values);

//Get entire objects by using Object Entries
const entries = Object.entries(openingHours);
console.log("Get entire Object by using Object Entries ====> ");
for (const [key,{open, close}] of entries){ //[Key, Value] pair
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Sets - Example
const orderSet = new Set(['Pizza','Briyani','Pasta','Pizza','Briyani','Pasta']);
console.log("Output for Set ===> ",orderSet); //It will remove the dupllicates

console.log("Print Size ===> ",orderSet.size); //It is not length
console.log("Using has method for true statement ===> ",orderSet.has('Pizza')); //It will return boolean result
console.log("Using has method for false statement ===> ",orderSet.has('Bread'));

//Map function
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log("Output for Map function ====> ");
console.log(rest.set(2,'Lisbon, Portugal'));

console.log(rest.get('name'));

//Converting object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log("Converting Object into Map ===> ");
console.log(hoursMap);

const question = new Map([
    ['question','What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'Sorry...Try again!'],
]);

for (const [key, value] of question){
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log(question.get(question.get('Correct') === answer));

//Convert map to array
console.log("Befor Convert Map to Array ===> ");
console.log(question);
console.log("After Convert Map to Array ===> ");
console.log([...question]);

/* Working With Strings */

//Basic Examples

const airline = "TAP Air Portugal";
console.log(airline[0]);
console.log("TAP Air Portugal"[0]); //both are get same output

console.log(airline.length);
console.log("TAP Air Portugal".length); //both are get same output

