import { create } from "zustand";

interface NavDrawerStore {
  isOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

const useNavDrawerStore = create<NavDrawerStore>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDrawer: () => set({ isOpen: false }),
}));

export default useNavDrawerStore;
