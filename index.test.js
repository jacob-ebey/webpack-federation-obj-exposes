const objectExposes = require("./index");

it("objectExposes flattens", () => {
  expect(
    objectExposes({
      a: "./a.js",
      b: {
        1: "./b/1.js",
        2: "./b/2.js",
      },
    })
  ).toEqual({
    "./a": "./a.js",
    "./b/1": "./b/1.js",
    "./b/2": "./b/2.js",
  });
});

it("objectExposes custom path", () => {
  expect(
    objectExposes({
      a: "./a.js",
      b: {
        1: "./b/1.js",
        2: "./b/2.js",
      },
    }, "./test")
  ).toEqual({
    "./test/a": "./a.js",
    "./test/b/1": "./b/1.js",
    "./test/b/2": "./b/2.js",
  });
});
