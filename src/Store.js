import { create } from "zustand";

export const useProductStore = create((set) => ({
  data: [],
  loading: false,
  error: null,
  cart: [],

  fetchData: async () => {
    set({ loading: true, error: null });

    const url = "https://api.escuelajs.co/api/v1/products";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      const validProducts = result.filter(
        (p) =>
          p.title &&
          p.price &&
          Array.isArray(p.images) &&
          p.images.length > 0 &&
          typeof p.images[0] === "string" &&
          p.images[0].trim() !== ""
      );

      set({ data: validProducts.slice(0, 50), loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addtocart: (item) =>
    set((state) => {
      const alreadyExists = state.cart.find((i) => i.id === item.id);
      if (alreadyExists) return state;
      return { cart: [...state.cart, item] };
    }),

  removecart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
