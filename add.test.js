const { Add } = require('./add');

describe('Add - Empty String', () => {
  test('returns 0 for an empty string', () => {
    expect(Add('')).toBe(0);
  });
});