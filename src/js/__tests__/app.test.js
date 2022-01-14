/* eslint-disable quotes */

test('console.log the text "it works!"', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  console.log('it works!');

  expect(consoleSpy).toHaveBeenCalledWith('it works!');
});
