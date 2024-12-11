import { create } from 'zustand';


export interface HeroStore {
  scroll: boolean,
  setScroll: (flag:boolean) => void
}

const useHeroStore = create((set): HeroStore => ({
  scroll: false,
  setScroll: (flag:boolean) => set({ scroll: flag }),
}))

export default useHeroStore;