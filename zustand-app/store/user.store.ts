import { type User } from "@/types";
import { create } from "zustand";

const initialValues = {
  users: [] as User[],
};

export type UserStore = {
  users: User[];
  addUser: (newUser: User) => void;
  modifyUser: (userId: string, updatedUser: Partial<User>) => void;
  removeUser: (userId: string) => void;
  fetchUsers: (users: User[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialValues,
  addUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
    })),
  modifyUser: (userId, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      ),
    })),
  removeUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
  fetchUsers: (users) => set(() => ({ users })),
}));

export default useUserStore;
