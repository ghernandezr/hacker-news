import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const searchNewsByDate = (query: string, page: number) => {
  return axios
    .get("/search_by_date", {
      params: {
        query,
        page,
      },
    })
    .then((resp) => resp.data);
};
