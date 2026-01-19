import { create } from "zustand";

interface IHeaderDropdownStatus {
  isOpened: boolean;
  setStatusChange: () => void;
}

export const useHeaderDropdownStatusStore = create<IHeaderDropdownStatus>(
  (set) => ({
    isOpened: false,
    setStatusChange: () => set((state) => ({ isOpened: !state.isOpened })),
  }),
);
