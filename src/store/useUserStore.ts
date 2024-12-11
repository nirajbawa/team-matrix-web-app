import { create } from 'zustand';

interface User{
  profilePic: any
}

export interface UserStore {
  data: User,
  setData: (data:User) => void
}

const useUserStore = create((set): UserStore => ({
  data: {profilePic: ""},
  setData: (data:User) => set({ data: data }),
}))

export default useUserStore;