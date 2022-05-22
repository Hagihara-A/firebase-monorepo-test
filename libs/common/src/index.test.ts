import { splitArray } from ".";

test(`${splitArray.name}`, () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const actual = splitArray(arr, 3);
  const expected = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]];
  expect(actual).toEqual(expected);
});
