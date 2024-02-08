const checkFive = require('../checkFive');

describe('checkFive', () => {
    test('should return "4 is less than 5."', () => {
        expect(checkFive(4)).toBe('4 is less than 5.');
    });

    test('should return "5 is equal to 5."', () => {
        expect(checkFive(5)).toBe('5 is equal to 5.');
    });

    test('should return "6 is greater than 5."', () => {
        expect(checkFive(6)).toBe('6 is greater than 5.');
    });
});