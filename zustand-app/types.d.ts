export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: string;
  title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | "";
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
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
