import React from "react";
import DigitArr from "../digit-arr";

test("length of an array is 10", () => {
  expect(DigitArr()).toHaveLength(10);
});

const expectedButton = (
  <button className="digit-button digit-button_1" key={1}>
    {1}
  </button>
);
test("first item in this array is a button with key equal to 1, and 1 passed as content", () => {
  expect(JSON.stringify(DigitArr()[0])).toStrictEqual(
    JSON.stringify(expectedButton),
  );
});

const secondExpectedButton = (
  <button className="digit-button digit-button_0" key={0}>
    {0}
  </button>
);
test("tenth item in this array is a button with key equal to 0, and 0 passed as content", () => {
  expect(JSON.stringify(DigitArr()[9])).toStrictEqual(
    JSON.stringify(secondExpectedButton),
  );
});
