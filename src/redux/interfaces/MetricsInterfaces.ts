import { UserData } from "./UserInterface";

export interface Metric {
  id: number;
  date: Date;
  name: string;
  value: number;
  postedBy: UserData;
}

// type Metric {
//   date: DateTime!
//   id: ID!
//   name: String!
//   postedBy: User
//   value: Int!
// }
