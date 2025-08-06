import { create } from "zustand";

export const useAddToCart = create((set) => ({
  value: [],
  addToCart: (newObj) =>
    set((state) => ({
      value: [...state.value, newObj],
    })),
  removeFromCart: (index) =>
    set((state) => ({ value: state.value.filter((_, i) => i !== index) })),
}));
