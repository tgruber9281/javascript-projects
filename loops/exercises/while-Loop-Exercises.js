//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let numOfAstronauts = 0;
let shuttleAltitude = 0;
const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelLevel = Number(input.question("What is the starting fuel level? "));
while (fuelLevel > 30000 || fuelLevel < 5000 || isNaN(fuelLevel)) {
  fuelLevel = Number(input.question("Please enter a starting amount between 5000 and 30,000. "));
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
 numOfAstronauts = Number(input.question("How many astronauts are on board? "));
 while (numOfAstronauts > 7 || numOfAstronauts <= 0 || isNaN(numOfAstronauts)) {
  numOfAstronauts = Number(input.question("No more than 7 seven astronauts may be on board. Please reduce their number and try again. How many astronauts are on board? "));
 }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - numOfAstronauts*100 >= 0) {
  fuelLevel -= numOfAstronauts*100;
  shuttleAltitude += 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude}km.`);
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}