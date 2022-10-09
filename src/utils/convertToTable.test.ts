import { mockMetrics } from "../mocks/metrics";
import { convertObjectOfMetricsToTable } from "./convertToTable";

describe("Given the convertObjectOfMetricsToTable function", () => {
  describe("When invoked with an array containing two metrics, each of a different name and same date", () => {
    test("Then it will return an array containing 2 arrays, each containing 3 elements", () => {
      const inputtedMetrics = mockMetrics;

      const returnedTable = convertObjectOfMetricsToTable(inputtedMetrics);

      const expectedRows = 2;
      const expectedColumns = 3;

      expect(returnedTable).toHaveLength(expectedRows);
      expect(returnedTable[0]).toHaveLength(expectedColumns);
    });
  });
});
