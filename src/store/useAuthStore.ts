import { create } from 'zustand';

interface Data{
    email: string;
    password: string;
}

export interface AuthStore {
  data: Data,
  setData: (data:Data) => void
}

const useAuthStore = create((set): AuthStore => ({
  data: {email:"", password:""},
  setData: (data:Data) => set({ data: data }),
}))

export default useAuthStore;