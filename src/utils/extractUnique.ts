export const extractUniqueValues = (
  objectArray: { [key: string]: any }[],
  propertyToBeExtracted: string
): any[] => {
  const uniqueValueList = objectArray
    .map((item) => item[propertyToBeExtracted])
    .filter((value, index, self) => self.indexOf(value) === index);
  return uniqueValueList;
};

export const extractUniqueDates = (
  objectArray: { [key: string]: any }[]
): any[] => {
  const uniqueDateList = objectArray
    .map(({ date }) => date.slice(0, 10))
    .filter((value, index, self) => self.indexOf(value) === index);

  return uniqueDateList;
};
