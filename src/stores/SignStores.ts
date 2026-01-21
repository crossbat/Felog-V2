import { create } from "zustand";

interface ISignPageToggleStatus {
  pageStatus: boolean;
  setPageStatusChange: () => void;
  setPageLogin: () => void;
  setPageSignUp: () => void;
  reset: () => void;
}

interface ITempToogleStatus {
  status: boolean;
  setStatusChange: () => void;
}

export const useSignPageToggleStore = create<ISignPageToggleStatus>((set) => ({
  pageStatus: false,
  setPageStatusChange: () =>
    set((state) => ({ pageStatus: !state.pageStatus })),
  reset: () => set({ pageStatus: false }),
  setPageLogin: () => set({ pageStatus: false }),
  setPageSignUp: () => set({ pageStatus: true }),
}));

export const useTempToggleStore = create<ITempToogleStatus>((set) => ({
  status: false,
  setStatusChange: () => set((state) => ({ status: !state.status })),
}));
