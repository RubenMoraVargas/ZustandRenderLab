import { Post } from "@/app/typings";
import { getUrl } from "@/consts/apiUrl";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
 
interface CounterStore {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  decrement: (value: number) => void;
  fetchPosts: () => Promise<void>;
  reset: () => void;
  changeTitle: () => void;
}

const initialValues = {
  title: "Posts Research",
  count: 10,
  posts: [] as Post[],
};

const counterStore = createWithEqualityFn<CounterStore>(
  (set, get) => ({
    ...initialValues,
    increment: (value: number) =>
      set((state) => ({ ...state, count: Math.min(state.count + value, 100) })),
    decrement: (value: number) =>
      set((state) => ({ ...state, count: Math.max(state.count - value, 1) })),
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
  }),
  Object.is
);
 
export const counterStoreSelector = <T extends keyof CounterStore>(
  key: T, useShallow= true
) => () =>
  counterStore(
    (state: CounterStore) => {
      const value = state[key];
      return { [key]: value };
    },
    useShallow ? shallow : undefined
  );

export const titleFromCounterStore= counterStoreSelector("title");
export const countFromCounterStore= counterStoreSelector("count");
export const postsFromCounterStore= counterStoreSelector("posts");
  
export const actionsFromCounterStore = () =>
  counterStore((state: CounterStore) => {
    const { increment, decrement, fetchPosts, reset, changeTitle} = state;
    return { increment, decrement, fetchPosts, reset, changeTitle };
  }, shallow);
