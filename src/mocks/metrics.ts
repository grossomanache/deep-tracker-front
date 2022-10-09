import { Metric } from "../redux/interfaces/MetricsInterfaces";
import { mockUser } from "../redux/mocks/userMocks";

const mockDeepWorkMetric: Metric = {
  id: 1,
  date: Date(),
  name: "deepWork",
  value: 10,
  postedBy: mockUser,
};

const mockCommitsMetric: Metric = {
  id: 2,
  date: Date(),
  name: "commits",
  value: 10,
  postedBy: mockUser,
};

export const mockMetrics: Metric[] = [mockCommitsMetric, mockDeepWorkMetric];
