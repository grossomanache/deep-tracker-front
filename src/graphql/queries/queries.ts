import { gql } from "@apollo/client";

export interface FeedInputs {
  filterByName?: string;
  skip?: number;
  take?: number;
}

export const feedQuery = (props: FeedInputs | null = null) => {
  let queryParameters = "";

  if (props) {
    const { filterByName, skip, take } = props;
    const filterParameter = filterByName
      ? `filterByName: ${filterByName},`
      : "";
    const skipParameter = skip ? `skip: ${skip},` : "";
    const takeParameter = take ? `take: ${take},` : "";
    queryParameters = `(${filterParameter} ${skipParameter} ${takeParameter})`;
  }

  const GET_METRICS = gql`
    query {
      feed ${queryParameters}{
        metrics {
          id
          date
          name
          value
          postedBy {
            email
          }
        }
      }
    }
  `;

  return GET_METRICS;
};
