import { useInfiniteQuery } from "@tanstack/react-query";
import { searchNewsByDate } from "../api/news-service";
import { useSearchNewsParams } from "../store/store";

export const useSearchByDate = () => {
  const query = useSearchNewsParams((state) => state.query);

  return useInfiniteQuery({
    queryKey: ["searchByDate", query],
    queryFn: ({ pageParam = 0 }) => {
      return searchNewsByDate(query, pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
  });
};
