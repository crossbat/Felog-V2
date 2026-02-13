import { create } from "zustand";

interface IBlurFilterStatus {
  blur: boolean;
  setBlurStateChange: () => void;
  reset: () => void;
}

export const useBlurFilterStatusStore = create<IBlurFilterStatus>((set) => ({
  blur: false,
  setBlurStateChange: () => set((state) => ({ blur: !state.blur })),
  reset: () => set({ blur: false }),
}));
