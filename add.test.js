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

describe('Add - Custom Delimiters', () => {
    test('returns 3 for "//;\n1;2"', () => {
        expect(Add('//;\n1;2')).toBe(3);
    });

    test('returns 6 for "//|\n1|2|3"', () => {
        expect(Add('//|\n1|2|3')).toBe(6);
    });

    test('returns 10 for "//-\n1-2-3-4"', () => {
        expect(Add('//-\n1-2-3-4')).toBe(10);
    });

    test('returns 1 for "//;\n1;\n" (invalid input)', () => {
        expect(Add('//;\n1;\n')).toBe(1);
    });

    test('returns 3 for "//;\n1;2;\n" (invalid input)', () => {
        expect(Add('//;\n1;2;\n')).toBe(3);
    });

    test('returns 0 for "\n" (invalid input)', () => {
        expect(Add('\n')).toBe(0);
    });

    test('returns 0 for "//;\n" (invalid input)', () => {
        expect(Add('//;\n')).toBe(0);
    });
});

describe('Add - Negative Numbers', () => {
    test('throws an exception for "1,-2,3,-4"', () => {
        expect(() => Add('1,-2,3,-4')).toThrow('Negatives not allowed: -2, -4');
    });

    test('throws an exception for "-1,-2,-3"', () => {
        expect(() => Add('-1,-2,-3')).toThrow('Negatives not allowed: -1, -2, -3');
    });

    test('throws an exception for "//;\n-1;2;-3"', () => {
        expect(() => Add('//;\n-1;2;-3')).toThrow('Negatives not allowed: -1, -3');
    });

    test('throws an exception for "1,\n-2" (invalid input)', () => {
        expect(() => Add('1,\n-2')).toThrow('Negatives not allowed: -2');
    });

    test('throws an exception for "//;\n1;\n-2" (invalid input)', () => {
        expect(() => Add('//;\n1;\n-2')).toThrow('Negatives not allowed: -2');
    });

    test('throws an exception for "//;\n-1;\n" (invalid input)', () => {
        expect(() => Add('//;\n-1;\n')).toThrow('Negatives not allowed: -1');
    });
});

describe('Add - Ignore Numbers Greater Than 1000', () => {
    test('returns 2 for "2,1001"', () => {
        expect(Add('2,1001')).toBe(2);
    });

    test('returns 1000 for "1000,1001"', () => {
        expect(Add('1000,1001')).toBe(1000);
    });

    test('returns 0 for "1001,2002"', () => {
        expect(Add('1001,2002')).toBe(0);
    });

    test('returns 1 for "1,\n1001" (invalid input)', () => {
        expect(Add('1,\n1001')).toBe(1);
    });

    test('returns 3 for "//;\n1;1001;\n2" (invalid input)', () => {
        expect(Add('//;\n1;1001;\n2')).toBe(3);
    });

    test('returns 0 for "//;\n1001;\n" (invalid input)', () => {
        expect(Add('//;\n1001;\n')).toBe(0);
    });
});

describe('Add - Delimiters of Any Length', () => {
    test('returns 6 for "//[***]\n1***2***3"', () => {
        expect(Add('//[***]\n1***2***3')).toBe(6);
    });

    test('returns 10 for "//[----]\n1----2----3----4"', () => {
        expect(Add('//[----]\n1----2----3----4')).toBe(10);
    });

    test('returns 3 for "//[+]\n1+2"', () => {
        expect(Add('//[+]\n1+2')).toBe(3);
    });
});

describe('Add - Multiple Delimiters', () => {
    test('returns 6 for "//[*][%]\n1*2%3"', () => {
        expect(Add('//[*][%]\n1*2%3')).toBe(6);
    });

    test('returns 10 for "//[**][%%]\n1**2%%3**4"', () => {
        expect(Add('//[**][%%]\n1**2%%3**4')).toBe(10);
    });

    test('returns 15 for "//[+][-]\n1+2-3+4-5"', () => {
        expect(Add('//[+][-]\n1+2-3+4-5')).toBe(15);
    });
});