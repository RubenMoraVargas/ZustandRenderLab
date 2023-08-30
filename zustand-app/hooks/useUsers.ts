import useSWR from "swr";
import useUserStore from "@/store/user.store";

import axios from "axios";
import { type User } from "@/types";
import { userBaseURL } from "@/consts/apiUrl";

export const useUsers = (callback?: Function) => {
  const api = axios.create({
    baseURL: userBaseURL,
  });

  const {
    addUser: addUserToStore,
    modifyUser: modifyUserToStore,
    removeUser: deleteUserToStore,
    fetchUsers: fetchUsersToStore,
  } = useUserStore();

  const fetcher = async (url: string) => {
    const { data } = await api.get(url);
    fetchUsersToStore(data);
    return data;
  };

  const { data, error, mutate } = useSWR<User[], Error>("/user", fetcher, {
    onSuccess: () => {
      if (callback) callback();
    },
  });

  const create = async (user: User) => {
    if (!data) {
      return;
    }
    try {
      const { data: createdUser } = await api.post<User>("/user", user);
      addUserToStore(createdUser);
      mutate([...data, createdUser]);
    } catch (err) {}
  };

  const update = async (user: User) => {
    if (!data) {
      return;
    }
    const { data: updatedUser } = await api.patch<User>(
      `/user/${user.id}`,
      user
    );
    modifyUserToStore(user.id, updatedUser);
    mutate(data.map((item) => (item.id === user.id ? updatedUser : item)));
  };

  const remove = async (user: User) => {
    if (!data) {
      return;
    }
    await api.delete<User>(`/user/${user.id}`);
    deleteUserToStore(user.id);
    mutate(data.filter((item) => item.id === user.id));
  };

  return { data, error, create, update, remove };
};
