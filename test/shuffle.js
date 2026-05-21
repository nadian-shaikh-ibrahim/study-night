import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle the indexes of an array", () => {
    const originalArray = [1, 2, 3, 4, 5];

    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    expect(shuffledArray).to.not.equal(originalArray);
  });
});