//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];


//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1,element2,element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(`The mass of element one is ${table[0][2]}. The name of element 2 is ${table[1][0]}. The symbol of element 3 is ${table[2][1]}.`);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
// let rubiksCube = [];
// let sides = [];
// let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'white']

// sides.push([colors[0], colors[2], colors[3], colors[4], colors[1], colors[5]]);
// sides.push([colors[1], colors[3], colors[4], colors[5], colors[2], colors[0]]);
// sides.push([colors[2], colors[4], colors[5], colors[0], colors[3], colors[1]]);
// sides.push([colors[3], colors[5], colors[0], colors[1], colors[4], colors[2]]);
// sides.push([colors[4], colors[1], colors[1], colors[2], colors[5], colors[3]]);
// sides.push([colors[5], colors[0], colors[2], colors[3], colors[0], colors[4]]);

// rubiksCube.push(sides);
// rubiksCube.push(sides);

// console.log(colors);
// console.log(sides);
// console.log(rubiksCube);
// console.log(rubiksCube[1][0][0]);

let dArray = [
    [
        ['James', 'Adam'],
        ['Hammond', 'Winchester']
    ],
    [
        ['Molly', 'Jane'],
        ['Weasley', 'Eyre']
    ],
    [
        ['Sophie', 'Dylan'],
        ['Evans', 'Scott']
    ]
]

console.log(dArray[2][0][1]);