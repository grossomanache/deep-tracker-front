import { Metric } from "../../redux/interfaces/MetricsInterfaces";
import { convertObjectOfMetricsToTable } from "../../utils/convertToTable";
import { MetricsTableContainer } from "./MetricsTableContainer";

const MetricsTable = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  const metricsTable = convertObjectOfMetricsToTable(metrics);
  const tableHeaders = metricsTable[0];
  const tableBody = metricsTable.slice(1);

  return (
    <MetricsTableContainer>
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
    </MetricsTableContainer>
  );
};

export default MetricsTable;
