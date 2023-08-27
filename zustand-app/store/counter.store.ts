import { Post } from "@/app/typings";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";


const initialValues = {
  title: "Post research",
  count: 10,
  posts: [] as Post[],
};

interface CounterStore {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  decrement: (value: number) => void;
  getPosts: () => Promise<void>;
  reset: () => void;
}

export const getUrl = (limit: number) =>
  `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;

const counterStore = createWithEqualityFn<CounterStore>(
  (set, get) => ({
    ...initialValues,
    increment: (value: number) =>
      set((state) => ({ ...state, count: Math.min(state.count + value, 100) })),
    decrement: (value: number) =>
      set((state) => ({ ...state, count: Math.max(state.count - value, 1) })),
    getPosts: async () => {
      const { count } = get();
      const posts = await (await fetch(getUrl(count))).json();
      set((state) => ({ ...state, posts }));
    },
    reset: async () => {
      const count = initialValues.count;
      const posts = await (await fetch(getUrl(count))).json();
      set(() => ({ ...initialValues, posts }));
    },
  }),
  Object.is
);

export const useCounterStore = () => counterStore((state:CounterStore) => {
  const { count, title, posts } = state;
  return { count, title, posts };
}, shallow);
 
export const useCounterFunctions = () => counterStore((state:CounterStore) => {
  const { increment, decrement, getPosts, reset } = state;
  return { increment, decrement, getPosts, reset };
}, shallow);
