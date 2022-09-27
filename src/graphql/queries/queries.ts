import { gql } from "@apollo/client";

interface FeedInputs {
  filterByName?: string;
  skip?: number;
  take?: number;
}

export const FEED_QUERY = (props?: FeedInputs) => {
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

  const query = gql`
    {
      feed ${queryParameters} {
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

  return query;
};
