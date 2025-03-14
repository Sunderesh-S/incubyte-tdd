# String Calculator

A simple String Calculator implemented in JavaScript using **Test-Driven Development (TDD)** and **Jest** for testing. This project follows the requirements outlined in the [Incubyte TDD Assessment](https://blog.incubyte.co/blog/tdd-assessment/).

---

## Features

The `Add` method supports the following features:

1. **Empty String**: Returns `0` for an empty string.
2. **Single Number**: Returns the number itself for a single number.
3. **Two Numbers**: Returns the sum of two numbers separated by commas.
4. **Unknown Amount of Numbers**: Returns the sum of an unknown amount of numbers.
5. **New Lines as Delimiters**: Handles new lines (`\n`) between numbers.
6. **Custom Delimiters**: Supports custom delimiters specified in the input (e.g., `//;\n1;2`).
7. **Negative Numbers**: Throws an exception with the message `negatives not allowed` and lists the negative numbers.
8. **Numbers Greater Than 1000**: Ignores numbers greater than 1000.
9. **Delimiters of Any Length**: Supports delimiters of any length (e.g., `//[***]\n1***2***3`).
10. **Multiple Delimiters**: Supports multiple delimiters (e.g., `//[*][%]\n1*2%3`).

---

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git https://github.com/Sunderesh-S/incubyte-tdd
   cd incubyte-tdd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Tests

This project uses **Jest** for testing. To run the tests, use the following command:

```bash
npm test
```

---

## Implementation Details

### `Add` Method

The `Add` method takes a string of numbers separated by delimiters and returns their sum. It handles various edge cases, including invalid inputs and custom delimiters.

#### Method Signature
```javascript
function Add(numbers) {
  // Implementation
}
```

#### Example Usage
```javascript
Add(''); // Returns 0
Add('1'); // Returns 1
Add('1,2'); // Returns 3
Add('1\n2,3'); // Returns 6
Add('//;\n1;2'); // Returns 3
Add('1,-2,3,-4'); // Throws "negatives not allowed: -2,-4"
Add('2,1001'); // Returns 2 (ignores 1001)
Add('//[***]\n1***2***3'); // Returns 6
Add('//[*][%]\n1*2%3'); // Returns 6
```

---

## Test Cases

The test suite covers the following scenarios:

1. **Empty String**:
   - `""` → `0`

2. **Single Number**:
   - `"1"` → `1`
   - `"10"` → `10`

3. **Two Numbers**:
   - `"1,2"` → `3`
   - `"4,6"` → `10`

4. **Unknown Amount of Numbers**:
   - `"1,2,3,4,5"` → `15`

5. **New Lines as Delimiters**:
   - `"1\n2,3"` → `6`
   - `"1,\n"` → `1` (invalid input)

6. **Custom Delimiters**:
   - `"//;\n1;2"` → `3`
   - `"//|\n1|2|3"` → `6`

7. **Negative Numbers**:
   - `"1,-2,3,-4"` → Throws `"negatives not allowed: -2,-4"`

8. **Numbers Greater Than 1000**:
   - `"2,1001"` → `2`
   - `"1001,2002"` → `0`

9. **Delimiters of Any Length**:
   - `"//[***]\n1***2***3"` → `6`

10. **Multiple Delimiters**:
    - `"//[*][%]\n1*2%3"` → `6`

---

## Resources

- [Incubyte TDD Assessment](https://blog.incubyte.co/blog/tdd-assessment/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Test-Driven Development (TDD) Video](thttps://www.youtube.com/watch?v=qkblc5WRn-U)

---

## Author

Sunderesh Selvaraj
s4sunderesh@gmail.com
