function Add(numbers) {
    if (numbers === '') return 0;
  
    // Replace invalid patterns like "1,\n" or "\n" with valid delimiters
    numbers = numbers.replace(/,\n/g, ',').replace(/\n,/g, ',').replace(/\n/g, ',');
  
    const nums = numbers.split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }

module.exports = { Add };
