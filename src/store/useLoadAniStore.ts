import { create } from "zustand";

export interface HeroStore {
  animation: boolean;
  setAnimation: (flag: boolean) => void;
}

const useLoadAniStore = create<HeroStore>((set) => ({
  animation: false,
  setAnimation: (flag: boolean) => set({ animation: flag }),
}));

export default useLoadAniStore;
