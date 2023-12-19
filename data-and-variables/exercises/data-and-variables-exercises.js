// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = 'Determination';
let shuttleSpeedMPH = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const MPK = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof MPK);

let distanceToMarsMiles = distanceToMarsKm * MPK;
let hoursToMars = distanceToMarsMiles / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;

console.log(shuttleName, "will take", daysToMars, "days to reach Mars.");

let distanceToMoonMiles = distanceToMoonKm * MPK;
let hoursToMoon = distanceToMoonMiles / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName, "will take", daysToMoon, "days to reach the Moon.");