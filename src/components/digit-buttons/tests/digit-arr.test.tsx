import React from "react"
import { test, expect } from "@jest/globals"
import DigitArr from "../digit-arr.tsx"

test("length of an array is 10", () => {
  expect(DigitArr(undefined)).toHaveLength(10)
})

const expectedButton = (
  <button type="button" className="digit-button digit-button_1" key={1}>
    {1}
  </button>
)
test("first item in this array is a button with key equal to 1, and 1 passed as content", () => {
  expect(JSON.stringify(DigitArr(undefined)[0])).toStrictEqual(
    JSON.stringify(expectedButton),
  )
})

const secondExpectedButton = (
  <button type="button" className="digit-button digit-button_0" key={0}>
    {0}
  </button>
)
test("tenth item in this array is a button with key equal to 0, and 0 passed as content", () => {
  expect(JSON.stringify(DigitArr(undefined)[9])).toStrictEqual(
    JSON.stringify(secondExpectedButton),
  )
})
