import { Metric } from "../redux/interfaces/MetricsInterfaces";
import { extractUniqueDates, extractUniqueValues } from "./extractUnique";

export const convertObjectOfMetricsToTable = (metrics: Metric[]) => {
  const leadMeasures = extractUniqueValues(metrics, "name");
  const allDates = extractUniqueDates(metrics);

  const headers = ["Date", ...leadMeasures];
  const tableContainingMetricInformation: (number | string)[][] = [headers];

  allDates.forEach((date) => {
    const tableRow: (number | string)[] = [date];
    leadMeasures.forEach((leadMeasure) => {
      const searchedMetric = metrics.find(
        ({ name, date: loggedDate }) =>
          name === leadMeasure && loggedDate.toString().slice(0, 10) === date
      );
      tableRow.push(searchedMetric ? searchedMetric.value : "N/A");
    });
    tableContainingMetricInformation.push(tableRow);
  });

  return tableContainingMetricInformation;
};
