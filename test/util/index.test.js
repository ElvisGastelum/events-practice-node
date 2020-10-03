const { capitalizeFirstLetter } = require('../../src/util');

describe('testing util/index.js', () => {
  test('should return Hello when send hello word', () => {
    const result = capitalizeFirstLetter('hello');

    expect(result).toBe('Hello');
  });
});
