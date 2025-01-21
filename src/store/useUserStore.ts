import { create } from "zustand";

interface User {
  profilePic: unknown;
}

export interface UserStore {
  data: User;
  setData: (data: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
  data: { profilePic: "" },
  setData: (data: User) => set({ data: data }),
}));

export default useUserStore;
