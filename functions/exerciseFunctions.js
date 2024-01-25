function makeLine(size = 0, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
        // console.log(`makeLine loop ${i}`);
    }
    return line;
}

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

function makeSquare(size = 0, char) {
    let square = (makeRectangle(size, size, char) + '\n');

    return square.slice(0, -1);
}

function makeRectangle(width = 0, height = width, char) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width, char) + '\n');
        // console.log(`Rect loop ${i}`)
    }
    return rectangle.slice(0, -1);
}

function makeDownwardStairs(height = 0, char) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1, char) + '\n');
    }
    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars, char) {
    let spaces = (makeLine(numSpaces, ' '));
    let line = (makeLine(numChars, char));
    return spaces+line+spaces;
}

function makeIsoscelesTriangle(height, char) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine((height - i -1), (2 * i + 1), char) + '\n');
    }
    return triangle.slice(0, -1);
}

function makeDiamond(height, char) {
    let diamond = makeIsoscelesTriangle(height, char) + '\n' + reverse(makeIsoscelesTriangle(height, char));
    return diamond;
}

console.log(makeDiamond(5, '/'));