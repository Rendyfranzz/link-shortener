import create from "zustand";

export const useStore = create((set) => ({
    originalLink: '',
    customLink: '',
    updateOriginalLink: (originalLink) => set(() => ({ originalLink: originalLink })),
    updateCustomLink: (customLink) => set(() => ({ customLink: customLink })),
  }))