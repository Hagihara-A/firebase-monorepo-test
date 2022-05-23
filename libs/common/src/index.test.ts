import { sayHelloMonorepo } from ".";

test(`${sayHelloMonorepo.name}`, () => {
  const actual = sayHelloMonorepo();
  const expected = "hello";
  expect(actual).not.toEqual(expected);
});
