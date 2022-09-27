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
    queryParameters = `(filterByName: ${filterByName})`;
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
