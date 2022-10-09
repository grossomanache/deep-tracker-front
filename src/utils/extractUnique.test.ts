import { extractUniqueValues } from "./extractUnique";

describe("Given the extractUniqueValues function", () => {
  describe("When invoked with a 'name' propertyToBeExtracted, 6 elements in the objectArray and 3 unique 'names'", () => {
    test("Then it will return an array containing 3 elements", () => {
      const propertyToBeExtracted = "name";
      const firstElement = { name: "first property" };
      const secondElement = { name: "second property" };
      const thirdElement = { name: "third property" };

      const inputtedObjectArray = [
        firstElement,
        firstElement,
        secondElement,
        secondElement,
        thirdElement,
        thirdElement,
      ];

      const returnedValues = extractUniqueValues(
        inputtedObjectArray,
        propertyToBeExtracted
      );

      const expectedNumberOfElements = 3;

      expect(returnedValues).toHaveLength(expectedNumberOfElements);
    });
  });
});

export {};
