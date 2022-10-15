import styled from "styled-components";

export const DateFilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  div.row {
    display: flex;
    flex-direction: row;
    &.text {
      font-weight: bold;
      margin: 10px 2px 0px 13px;
      * {
        margin: 0;
        flex-grow: 1;
      }
    }
    &.filters {
      div {
        margin: 0px 6px 6px 6px;
      }
    }
  }
  font-family: "Roboto", sans-serif;
  border: 2px solid grey;
  background-color: #68ff77b3;
`;
