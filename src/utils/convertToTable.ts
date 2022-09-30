import { Metric } from "../redux/interfaces/MetricsInterfaces";
import { uniqueDates, uniqueValues } from "./extractUnique";

export const convertToTable = (metrics: Metric[]) => {
  const headers = ["Date"];
  const leadMeasures = uniqueValues(metrics, "name");

  leadMeasures.forEach((leadMeasure) => {
    headers.push(leadMeasure);
  });

  const allDates = uniqueDates(metrics);

  const convertedTable: (number | string)[][] = [headers];

  allDates.forEach((date) => {
    const loggedValues: (number | string)[] = [date];
    leadMeasures.forEach((leadMeasure) => {
      const searchedMetric = metrics.filter(
        ({ name, date: loggedDate }) =>
          name === leadMeasure && loggedDate.toString().slice(0, 10) === date
      );
      loggedValues.push(searchedMetric[0] ? searchedMetric[0].value : "N/A");
    });
    convertedTable.push(loggedValues);
  });

  return convertedTable;
};
