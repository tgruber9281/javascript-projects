let num = 100.1;

//Returns 'undefined'.
// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

num = String(num);

if (num.indexOf('.') > 0) {
    console.log(num.length-1);
    // console.log ('if');
} else {
    console.log(num.length);
    // console.log('else');
}