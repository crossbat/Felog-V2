import { create } from "zustand";

interface INotePopupToggleStatus {
  isOpen: boolean;
  setPopupStateChange: () => void;
  reset: () => void;
}

export const useNotePopupToggleStore = create<INotePopupToggleStatus>((set) => ({
  isOpen: false,
  setPopupStateChange: () => set((state) => ({ isOpen: !state.isOpen })),
  reset: () => set({ isOpen: false })
}))
