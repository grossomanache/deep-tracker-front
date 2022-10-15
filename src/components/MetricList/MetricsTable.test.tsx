import { render, screen } from "@testing-library/react";
import { mockMetrics } from "../../mocks/metrics";
import MetricsTable from "./MetricsTable";

describe("Given the MetricsTable component", () => {
  describe("When invoked with an array containing two metrics, each of a different name and same date", () => {
    test("Then it will return a table with 3 columns and 2 rows", () => {
      const inputtedMetrics = mockMetrics;

      render(<MetricsTable metrics={inputtedMetrics} />);

      const expectedColumns = 3;
      const expectedRows = 2;

      const searchedColumns = screen.getAllByRole("columnheader");
      const searchedRows = screen.getAllByRole("row");

      expect(searchedColumns).toHaveLength(expectedColumns);
      expect(searchedRows).toHaveLength(expectedRows);
    });
  });
});
