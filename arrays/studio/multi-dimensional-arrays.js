let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cab1 = food.split(',').sort();
let cab2 = equipment.split(',').sort();
let cab3 = pets.split(',').sort();
let cab4 = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cab1, cab2, cab3, cab4];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabNum = input.question("Which cabinet do you want to look at? ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabNum < cargoHold.length && cabNum >= 0) {
    console.log(`The contents of cabinet ${cabNum} are: ${cargoHold[cabNum]}`);
} else {
    console.log(`Cabinet ${cabNum} is an invalid cabinet number. Please try again.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabNum = Number(input.question("Which cabinet would you like to look in for a particular item? "));
let item = input.question("What item are you looking for? ");

if (cabNum < cargoHold.length && cabNum >= 0) {
    if (cargoHold[cabNum].includes(item)) {
        console.log(`Cabinet ${cabNum} DOES contain ${item}`);
    } else {
        console.log(`Cabinet ${cabNum} DOES NOT contain ${item}`);
    }
} else {
    console.log(`Cabinet ${cabNum} is an invalid cabinet number. Please try again.`)
}
