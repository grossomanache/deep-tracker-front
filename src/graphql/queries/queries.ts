import { gql } from "@apollo/client";

export interface FeedInputs {
  filterByName?: string;
  skip?: number;
  take?: number;
  from?: string;
  to?: string;
}

export const feedQuery = (props: FeedInputs | null = null) => {
  let queryParameters = "";

  if (props) {
    const { filterByName, skip, take, from, to } = props;
    const filterParameter = filterByName
      ? `filterByName: ${filterByName},`
      : "";
    const skipParameter = skip ? `skip: ${skip},` : "";
    const takeParameter = take ? `take: ${take},` : "";
    const fromParameter = from ? `from: "${from}",` : "";
    const toParameter = to ? `to: "${to}",` : "";
    queryParameters = `(${filterParameter} ${skipParameter} ${takeParameter} ${fromParameter} ${toParameter})`;
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
