export interface Post {
  id: number;
  title: string;
  body: string;
}


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
