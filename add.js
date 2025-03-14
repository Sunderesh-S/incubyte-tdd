function Add(input = "") {
    // Handle empty input
    if (!input.trim())
        return 0;

    // Default delimiter: comma or newline
    let delimiter = /[\n,]+/;

    // Check for a custom delimiter at the beginning of the string
    let customDelimiterMatch = input.match(/^\/\/(\[.*\]|\S)\n/);
    if (customDelimiterMatch) {
        let customDelimiter = customDelimiterMatch[1];

        if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
            // Extract multi-character delimiters inside brackets
            customDelimiter = customDelimiter.slice(1, -1);
        }

        // Convert special characters in the delimiter to a valid regex
        delimiter = new RegExp(customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), "g");

        // Remove delimiter definition from input
        input = input.slice(customDelimiterMatch[0].length);
    }

    const numbers = input.split(delimiter).map(num => Number(num.trim())).filter(num => !isNaN(num));

    // Find negative numbers
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numbers
        .filter(num => num <= 1000) // Ignore numbers greater than 1000
        .reduce((sum, num) => sum + num, 0); // Sum up valid numbers
}

module.exports = { Add };


console.log(Add('//[***]\n1***2***3'))