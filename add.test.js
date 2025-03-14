const { Add } = require('./add');

describe('Add - Empty String', () => {
    test('returns 0 for an empty string', () => {
        expect(Add('')).toBe(0);
    });
});

describe('Add - Single Number', () => {
    test('returns 0 for "0"', () => {
        expect(Add('0')).toBe(0);
    });

    test('returns 5 for "5"', () => {
        expect(Add('5')).toBe(5);
    });

    test('returns 10 for "10"', () => {
        expect(Add('10')).toBe(10);
    });
});