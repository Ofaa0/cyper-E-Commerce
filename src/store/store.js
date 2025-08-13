import toast from "react-hot-toast";
import { create } from "zustand";

export const domain = "http://82.112.241.233:2500";

export const useAddToCart = create((set) => ({
  value: [],
  addToCart: (newObj) =>
    set((state) => ({
      value: [...state.value, newObj],
    })),
  removeFromCart: (index) =>
    set((state) => ({ value: state.value.filter((_, i) => i !== index) })),
  emptyCartList: () => set(() => ({ value: [] })),
  increseQTY: (index) =>
    set((state) => {
      const items = [...state.value];
      const item = items[index];
      const originalPrice = item.basePrice;
      if (item) {
        item.qty = (item.qty || 1) + 1;
        item.price = item.qty * originalPrice;
      }
      return { value: items };
    }),
  decreseQTY: (index) =>
    set((state) => {
      const items = [...state.value];
      const item = items[index];
      const originalPrice = item.basePrice;
      if (item.qty > 1) {
        item.qty = (item.qty || 1) - 1;
        item.price = item.qty * originalPrice;
      } else {
        items.splice(index, 1);
        toast("Item is removed !", {
          icon: "🗑️",
        });
      }
      return { value: items };
    }),
}));

export const selectedCat = create((set) => ({
  value: [],
  filteredCat: (cat) => set(() => ({ value: cat })),
  resetCat: () => set(() => ({ value: [] })),
}));

export const useToggleModalState = create((set) => ({
  valueToggle: false,
  toggleModalState: () => set((state) => ({ valueToggle: !state.valueToggle })),
}));
