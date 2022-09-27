import { useQuery } from "@apollo/client";
import { feedQuery } from "../graphql/queries/queries";

const Scoreboard = (): JSX.Element => {
  const usedQuery = feedQuery({ take: 1 });
  const { data } = useQuery(usedQuery);

  return <></>;
};

export default Scoreboard;
