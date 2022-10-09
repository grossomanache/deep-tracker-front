import styled from "styled-components";

export const MetricsTableContainer = styled.table`
  text-align: center;
  border-collapse: collapse;
  td,
  th {
    min-width: 100px;
  }
  thead {
    background-color: #56c856;
  }
  tbody {
    tr:nth-child(even) {
      background-color: #dedede;
    }
  }

  border: 1px solid black;
`;
