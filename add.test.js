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

describe('Add - Two Numbers', () => {
    test('returns 3 for "1,2"', () => {
        expect(Add('1,2')).toBe(3);
    });

    test('returns 10 for "4,6"', () => {
        expect(Add('4,6')).toBe(10);
    });

    test('returns 100 for "50,50"', () => {
        expect(Add('50,50')).toBe(100);
    });
});