export const uniqueValues = (
  objectArray: { [key: string]: any }[],
  propertyToBeExtracted: string
): any[] => {
  return objectArray
    .map((item) => item[propertyToBeExtracted])
    .filter((value, index, self) => self.indexOf(value) === index);
};
