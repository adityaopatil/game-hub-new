import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8e4b0bb2d85747bf860374bd34b3f3ad",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
