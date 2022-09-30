import { Metric } from "../redux/interfaces/MetricsInterfaces";
import { uniqueDates, uniqueValues } from "./extractUnique";

export const convertToTable = (metrics: Metric[]) => {
  const leadMeasures = uniqueValues(metrics, "name");
  const allDates = uniqueDates(metrics);

  const headers = ["Date", ...leadMeasures];
  const convertedTable: (number | string)[][] = [headers];

  allDates.forEach((date) => {
    const tableRow: (number | string)[] = [date];
    leadMeasures.forEach((leadMeasure) => {
      const searchedMetric = metrics.find(
        ({ name, date: loggedDate }) =>
          name === leadMeasure && loggedDate.toString().slice(0, 10) === date
      );
      tableRow.push(searchedMetric ? searchedMetric.value : "N/A");
    });
    convertedTable.push(tableRow);
  });

  return convertedTable;
};
