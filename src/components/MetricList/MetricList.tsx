import { Metric } from "../../redux/interfaces/MetricsInterfaces";
import { convertToTable } from "../../utils/convertToTable";

const MetricList = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  const metricsTable = convertToTable(metrics);
  const tableHeaders = metricsTable[0];
  const tableBody = metricsTable.slice(1);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row, rowNumber) => (
          <tr key={rowNumber}>
            {row.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MetricList;
