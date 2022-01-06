'use strict';

/* CHALLENGE #1 */
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ['Mohamed', 'Azharudeen','Madhan','Kumar','Gogul','Krishna','Raja','Gopal','Isai','Pakya','Bharani'],
        ['Shagul','Hameed','Nilofer','Banu','Elahi','Nisha','Novsath','Shaan','Mehi','Elakkiya','Sri'],
    ],
    score: '4.0',
    scored: ['Bharani','Pakya','Bharani','Nilofer'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    //function for challenge #1
    printGoals: function (...players){
        console.log(players);
        console.log(`${players.length} of goals that were scored.`);
    }
};

// console.log("Challenge #1 Output ==> ")

// //Created one player Array
// const [players1, players2] = game.players
// console.log("Team 1 => ",players1);
// console.log("Team 2 => ",players2);

// //First player in Array is Goalkeeper & remaining all are Fieldplayers
// const [gk, ...fieldPlayers] = players1;
// console.log(`Team 1's Goalkeeper is "${gk}" and Field Players are (${fieldPlayers}).`);

// //Join all the players from Team1 & Team2
// const allPlayers = [...players1, ...players2];
// console.log("All the Players (Team1 & Team2) => ",allPlayers);

// //Add Substitute players in Team1
// const players1Final = [...players1,'Thiago','Coutinho','Perisic'];
// console.log("After add the Substitute players to Team1 => ", players1Final);

// //Creating Variables for game.odds
// const {odds:{team1, x: draw, team2}}=game;
// console.log("After Created the variable for game.odds => ", team1, draw, team2)

// //function calling
// //Print the Goal Scored
// console.log("Calculated Goals => ");
// game.printGoals('Madhan','Gopal','Isai','Gogul');
// game.printGoals(...game.scored);

// //Using shortcircuting operator for winning result
// console.log("Who gonna Win => ");
// team1 > team2 && console.log("TEAM-1 is more likely to WIN!");
// team2 > team1 && console.log("TEAM-2 is more likely to WIN!");


/* CHALLENGE #2 */

// console.log("Challenge #2 Output ==>");

// //loop over the game.scored
// // const goalNumber = Object.entries(game.scored);
// const goalNumber = game.scored.entries();

// console.log("Player with Goals =>")
// for (const [i, name] of goalNumber) console.log(`Goal ${i + 1}: ${name}`);

// //Find average of game.odds
// let values = Object.values(game.odds);
// let oddTotal = 0;
// for (const value of values) oddTotal += value;
// const oddAverage = oddTotal / values.length;
// console.log("Average for game.odds => ",oddAverage);

// //Print Odd with Team names
// console.log("Odd is Victory or Draw? =>");
// for (const [team, odd] of Object.entries(game.odds)){
//     const teamNames = team === 'x' ? "draw" : `Victory ${game[team]}`;
//     console.log(`Odd of ${teamNames} ${odd}`);
// }

// //Bonus Part
// const scorers = {};
// for (const player of game.scored){
//     scorers[player] ? scorers[player]++ : (scorers[player]=1);
// }
// console.log("Scor of the Player => ");
// console.log(scorers);

/* CHALLENGE #3 */

// console.log("Challenge #3 Output ==>");

// const gameEvents = new Map([
//     [17, 'Goal'],
//     [36, 'Substitution'],
//     [47, 'Goal'],
//     [61, 'Substitution'],
//     [64, 'Yellow Card'],
//     [69, 'Red Card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'Goal'],
//     [80, 'Goal'],
//     [92, 'Yellow Card'],
// ]);

// //Remove duplicat in array 'events'
// const events = new Set(gameEvents.values());
// console.log("Events after removing duplicate => ",events);

// //Remove Yellow Card from 64th minute
// gameEvents.delete(64);
// console.log("After removed the Yellow card from 64th Minute ==> ");
// console.log(gameEvents);

// //3.
// /*const timeCalc = function(time){
//     const timeConsider = time <= 90 ? `An event happened on average every ${time / gameEvents.size} minutes` : 
//     `An event happened on average every ${[...gameEvents.keys()].pop() / gameEvents.size} minutes`;
//     console.log(timeConsider);
// }
// console.log("Before considering above 90 min ==> ");
// timeCalc(90);
// console.log("After consider above 90 min ==> ");
// timeCalc(92);*/
// console.log("Before considering above 90 min ==> ");
// console.log(`An event happened on average every ${90 / gameEvents.size} minutes`);

// console.log("After consider above 90 min ==> ");
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened on average every ${time / gameEvents.size} minutes`);

// //Findout First-half or Second-half
// console.log("Findout the goal is First-half or Second-half ==> ");
// for (const [key,value] of gameEvents){
//     const findHalf = key <= 45 ? `[FIRST HALF] ${key}: ${value}` : `[SECOND HALF] ${key}: ${value}`;
//     console.log(findHalf);
// }


/* CHALLENGE #4 */
console.log("Challenge #4 Output ==> ");

/*underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const testData = document.querySelector('textarea').value;
    console.log("Input given in TextField =>");
    console.log(testData);
    const texts = testData.split("\n");
    // console.log(texts);  
    console.log("After applied camelCase => ");  
    for (const [i,text] of texts.entries()){
        const [first, second] = text.toLowerCase().trim().split("_");
        const result = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        // console.log(result);
        console.log(`${result.padEnd(20)}${'I'.repeat(i+1)}`);
    }
});
