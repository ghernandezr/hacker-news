import { create } from "zustand";
import { persist } from "zustand/middleware";
import Post from "../model/Post";

interface SearchNewsParamsState {
  faves: Post[];
  setFaves: (post: Post) => void;
  removeFromFaves: (postId: string) => void;
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchNewsParams = create(
  persist<SearchNewsParamsState>(
    (set) => ({
      query: "",
      setQuery: (query: string) => set({ query }),
      faves: [],
      setFaves: (post: Post) => {
        set((state) => {
          const restFaves = state.faves.filter(
            (fav) => fav.id.localeCompare(post.id) !== 0
          );
          return { faves: [...restFaves, post] };
        });
      },
      removeFromFaves: (postId: string) =>
        set((state) => ({
          faves: state.faves.filter(
            (fave) => fave.id.localeCompare(postId) !== 0
          ),
        })),
    }),
    {
      name: "food-storage", // unique name
    }
  )
);
