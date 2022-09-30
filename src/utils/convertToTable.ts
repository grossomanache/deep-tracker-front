import { Metric } from "../redux/interfaces/MetricsInterfaces";
import { uniqueDates, uniqueValues } from "./extractUnique";

export const convertToTable = (metrics: Metric[]) => {
  const headers = ["Date"];
  const leadMeasures = uniqueValues(metrics, "name");

  leadMeasures.forEach((leadMeasure) => {
    headers.push(leadMeasure);
  });

  const dates = uniqueDates(metrics);

  const convertedTable: (number | string)[][] = [headers];

  dates.forEach((date) => {
    const values: (number | string)[] = [date];
    leadMeasures.forEach((leadMeasure) => {
      const searchedMetric = metrics.filter(
        (loggedMetric) =>
          loggedMetric.name === leadMeasure &&
          loggedMetric.date.toString().slice(0, 10) === date
      );
      values.push(searchedMetric[0] ? searchedMetric[0].value : "N/A");
    });
    convertedTable.push(values);
  });
};
