/*  FUNDAMENTAL - PART 2 */

// Challenge #1
const calcAverage = (a,b,c) => (a+b+c)/3;
console.log("Challenge #1 Output ==>");

const checkWinner = function (avgDophins, avgKoalas){
    if (avgDophins >= 2* avgKoalas){
        console.log(`Dolphins won the Trophy (${avgDophins} vs ${avgKoalas})`);
    }else if (avgKoalas >= 2* avgDophins){
        console.log(`Koalas won the Trophy (${avgKoalas} vs ${avgDophins})`);
    }else{
        console.log("No one win Trophy");
    }
}

//Data 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//Data 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Challenge #2
const calcTip = function(bill){
    return bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log("Challenge #2 Output ==>")
console.log(`Bills = ${bills}, Tips = ${tips}, totals= ${totals}`);

// Challenge #3
const mark={
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function(){
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function(){
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log("Challenge #3 Output ==>");
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}else{
    console.log("Both have same BMI");
}

// Challenge #4

const calTip = function (bill){
    return bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
}

const calAverage = function(arr){
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}

const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tipsNew = [];
const totalsNew = [];

for (let i=0; i<billsNew.length; i++){
    let tip = calTip(billsNew[i]);
    let total = tip+billsNew[i];
    totalsNew.push(total);
}

console.log("Challenge #4 Output ==>");
console.log(`Bills = ${billsNew}, Tips = ${tipsNew}, totals= ${totalsNew}`);
console.log(`Average for Total = ${calAverage(totalsNew)}`);

