const whoWon = require('../RPS');

describe('Rock, Paper, Scissors', () => {
    test('should return TIE! if both inputs are the same', () => {
        expect(whoWon('rock','rock')).toBe('TIE!')
    });

    test('should return "Player 2 wins" if P1 inputs rock and P2 inputs paper', () => {
        expect(whoWon('rock','paper')).toBe('Player 2 wins!')
    });

    test('should return "Player 2 wins" if P1 inputs scissors and P2 inputs rock', () => {
        expect(whoWon('scissors','rock')).toBe('Player 2 wins!')
    });

    test('should return "Player 2 wins" if P1 inputs paper and P2 inputs scissors', () => {
        expect(whoWon('paper','scissors')).toBe('Player 2 wins!')
    });

    test('should return "Player 1 wins" if P1 inputs paper and P2 inputs rock', () => {
        expect(whoWon('paper','rock')).toBe('Player 1 wins!')
    });

    test('should return "Player 1 wins" if P1 inputs rock and P2 inputs scissors', () => {
        expect(whoWon('rock','scissors')).toBe('Player 1 wins!')
    });

    test('should return "Player 1 wins" if P1 inputs scissors and P2 inputs paper', () => {
        expect(whoWon('scissors','paper')).toBe('Player 1 wins!')
    });

    test('should return -1 if a player inputs an invalid option', () => {
        expect(whoWon('stone','paper')).toBe(-1);
    });
});