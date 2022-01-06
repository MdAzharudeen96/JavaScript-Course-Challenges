'use stricst';

/* DEFAULT PARAMETERS */

//Example
const bookings = [];
                                            //These are default values
const createBooking = function(flightNum, numPassengers = 1, price = 200 * numPassengers){
    const booking = {flightNum, numPassengers, price};
    console.log(booking);
    bookings.push(booking);
};
createBooking('LM123');
createBooking('LM123', 3);
createBooking('LM123', undefined, 1000);

//Passing Arguments
const flight = "LM123";
const mohamed = {
    name: "Mohamed Azharudeen",
    passport: 123456789
}

const checkIn = function(flightNum,passenger){
    flightNum = "LM456";
    passenger.name = "Mr. "+passenger.name;

    if (passenger.passport === 123456789){
        // alert("Checked in");
        console.log(`${passenger.name}, your passport (${passenger.passport}) is verified. Checked in!`);
    }else{
        // alert("Wrong Passport");
        console.log(`${passenger.name}, Sorry your passport (${passenger.passport}) is Wrong.`);
    }
}
console.log("Before creating same function name ==> ");
checkIn(flight, mohamed);

console.log("After creating same function name ==> ");
const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(mohamed);
checkIn(flight,mohamed);

//First-Class function & Higher-Order function

//Function calling another Function
console.log("Function CALL another Function ==> ");
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...rest] = str.split(' ');
    return [first.toUpperCase(), ...rest].join(' ');
};

const transformer = function (str, fn) { //fn: Higher-Order function
    console.log(`Original Text: ${str}`);
    console.log(`Transformed String: ${fn(str)}`); //call the function here

    console.log(`Transformed by: ${fn.name}`); //.name returns the function name
};
transformer("JavaScript is the Best!", upperFirstWord);//Just pass the function as Parameter NOT call
transformer("JavaScript is the Best!", oneWord);

//Function returning another Function
console.log("Function RETURNS another Function ==> ");
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}!`);
    };
};

const greeter = greet("Hey");
greeter("Mohamed"); //Method 1
greet('Hello')('Azhar'); //Method 2

const greetArr = greeting => name => console.log(`${greeting} ${name}!`);
greetArr("Hello")("Mohamed");

//.this() Method
console.log("using .this Method ==> ");
const indego = {
    airline: "Indego",
    iataCode: "IG",
    bookings: [],
    book (flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
    },
};

indego.book(239, "Mohamed Azharudeen");
indego.book(123, "Mohamed");
console.log("After Booking: ",indego);

//.call() Method
console.log("using .call Method ==> ");
const jetAir = {             //used instead of this keyword
    airline: "Jet Aiway",
    iataCode: "JA",
    bookings: [],
}

const book = indego.book;

book.call(jetAir, 23, "Madhan"); //using CALL instead of using calling a function or Method
console.log(jetAir);

//.apply() Method
console.log("using .apply Method ==> ");
const airIndia = { 
    airline: "Air India",
    iataCode: "AI",
    bookings: [],
}

const flightData = [538, "Gopal"];
book.apply(airIndia, flightData);
console.log(airIndia);

//.bind() Method - 1
console.log("using .bind Method 1 ==> ");
const bookJAir = book.bind(jetAir);
bookJAir(23, "Gogul");

const bookJetAir = book.bind(jetAir, 23);
bookJetAir("Azhar"); //We pass only name because bind method defaulty have flightNum

//.bind() Method - 2 (When Objects are EventListener)
console.log("using .blind Method 2 ==> ");
indego.planes = 300;
indego.buyplanes = function (){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// indego.buyplanes();  //We using .bind() method instead of this line
document.querySelector('.buy').addEventListener('click',indego.buyplanes.bind(indego));

//IIFE - Example
console.log("Immediately Invoked Function Expression ==> ");
const runOnce = function(){
    console.log("This will never run again");
};
runOnce();

//This is called IIFE
(function (){
    console.log("This will never run again");
})();

(()=> console.log("This will also never run again"))();

//Closures

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b*2);
    };
};

g();
f();

//Re-asinging function both f() are different
h();
f(); 
console.dir(f);