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

describe('Add - Unknown Amount of Numbers', () => {
    test('returns 15 for "1,2,3,4,5"', () => {
        expect(Add('1,2,3,4,5')).toBe(15);
    });

    test('returns 6 for "1,2,3"', () => {
        expect(Add('1,2,3')).toBe(6);
    });

    test('returns 0 for "0,0,0,0"', () => {
        expect(Add('0,0,0,0')).toBe(0);
    });
});

describe('Add - New Lines as Delimiters', () => {
    test('returns 6 for "1\\n2,3"', () => {
        expect(Add('1\n2,3')).toBe(6);
    });

    test('returns 10 for "1\\n2\\n3,4"', () => {
        expect(Add('1\n2\n3,4')).toBe(10);
    });

    test('returns 1 for "1,\\n" (invalid input)', () => {
        expect(Add('1,\n')).toBe(1);
    });

    test('returns 3 for "1\\n,2" (invalid input)', () => {
        expect(Add('1\n,2')).toBe(3);
    });

    test('returns 0 for "\\n" (invalid input)', () => {
        expect(Add('\n')).toBe(0);
    });
});