let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let bagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardi = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, bagle, tardi, salamander]

// Print out the relevant information about each animal.

function crewReports(crewMember) {
   return `${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`
}

// Start an animal race!

function fitnessTest(arr) {
   let results = [];
   for (i = 0; i < arr.length; i++) {
      let steps = 0;
      let turns = 0;
      while (steps < 21) {
         steps += arr[i].move();
         turns++
      }
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`)
   }
   return results;
}

let raceResults = [];

raceResults = fitnessTest(crew);
for (const i in raceResults) {
   console.log(raceResults[i]);
}