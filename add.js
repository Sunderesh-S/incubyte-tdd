function Add(input = "") {
    // Handle empty input
    if (!input.trim())
        return 0;

    // Default delimiter: comma or newline
    let delimiter = /[\n,]+/;

    let customDelimiterMatch = input.match(/^\/\/(\[.*\]|\S)\n/);
    if (customDelimiterMatch) {
        let customDelimiter = customDelimiterMatch[1];

        if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
            // Extract multiple delimiters inside brackets
            let delimiters = [...customDelimiter.matchAll(/\[(.*?)\]/g)].map(m => m[1]);

            // Escape special regex characters for each delimiter
            let escapedDelimiters = delimiters.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));

            // Join them with "|" (OR) to create a regex pattern
            delimiter = new RegExp(escapedDelimiters.join("|"), "g");
        } else {
            // Single-character delimiter case
            delimiter = new RegExp(customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), "g");
        }

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
