export const uniqueValues = (
  objectArray: { [key: string]: any }[],
  propertyToBeExtracted: string
): any[] => {
  return objectArray
    .map((item) => item[propertyToBeExtracted])
    .filter((value, index, self) => self.indexOf(value) === index);
};

export const uniqueDates = (objectArray: { [key: string]: any }[]): any[] => {
  return objectArray
    .map(({ date }) => date.slice(0, 10))
    .filter((value, index, self) => self.indexOf(value) === index);
};
