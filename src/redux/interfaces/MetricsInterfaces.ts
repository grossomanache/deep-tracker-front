import { UserData } from "./UserInterface";

export interface Metric {
  id: number;
  date: string;
  name: string;
  value: number;
  postedBy: UserData;
}

export interface MetricsState {
  metricRegistry: Metric[];
}
