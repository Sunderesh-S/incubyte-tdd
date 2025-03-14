function Add(input = "") {
    // Handle empty input
    if (!input.trim())
        return 0;

    // Default delimiter: comma or newline
    let delimiter = /[\n,]+/;

    // Check for a custom delimiter at the beginning of the string
    const customDelimiterMatch = input.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        // Use custom delimiter
        delimiter = new RegExp(`[${customDelimiterMatch[1]}]+`);
        // Remove delimiter definition from input
        input = input.slice(customDelimiterMatch[0].length);
    }

    input = input.split(delimiter).map(num => Number(num.trim())).filter(num => !isNaN(num));

    // Find negative numbers
    const negatives = input.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    // Sum up numbers
    return input.reduce((sum, num) => sum + num, 0);
}

module.exports = { Add };
