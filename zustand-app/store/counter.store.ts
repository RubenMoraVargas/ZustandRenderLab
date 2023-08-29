import { type CounterStore, Post } from "@/types";
import { getUrl } from "@/consts/apiUrl"; 
import { create } from "zustand";
import { maxPostCount, minPostCount } from "@/consts/postCount";
 
const initialValues = {
  title: "Posts Research",
  count: 12,
  posts: [] as Post[],
};

export const useCounterStore = create<CounterStore>(
  (set, get) => ({
    ...initialValues,
    increment: (value: number) =>
      set((state) => ({ ...state, count: Math.min(state.count + value, maxPostCount) })),
    decrement: (value: number) =>
      set((state) => ({ ...state, count: Math.max(state.count - value, minPostCount) })),
    fetchPosts: async () => {
      const { count } = get();
      const posts = await (await fetch(getUrl(count))).json();
      set((state) => ({ ...state, posts }));
    },
    reset: async () => {
      const count = initialValues.count;
      const posts = await (await fetch(getUrl(count))).json();
      set(() => ({ ...initialValues, posts }));
    },
    changeTitle:()=>{
      set((state) => ({ ...state,title:"Fetch Articles" }));
    }
  }) 
); 