import { Metric } from "../interfaces/MetricsInterfaces";
import { mockUser } from "./userMocks";

export const mockMetric: Metric = {
  id: 1,
  date: Date(),
  name: "pagesRead",
  value: 10,
  postedBy: mockUser,
};
