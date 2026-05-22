import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle the indexes of an array", () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).to.have.members(originalArray);
    expect(shuffledArray).to.not.deep.equal(originalArray);
  });
});