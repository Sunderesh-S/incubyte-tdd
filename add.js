function Add(numbers) {
    if (numbers === '') return 0;
    const nums = numbers.split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { Add };