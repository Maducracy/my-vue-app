

import { create } from "zustand";

export const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  cart: [],

   fetchData: async () => {
    set({ loading: true, error: null });

    const url = "https://fakestoreapi.com/products";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addtocart: (item) =>
    set((state) => {
      const alreadyExists = state.cart.find((i) => i.id === item.id);
      if (alreadyExists) return state; // Avoid duplicates
      return { cart: [...state.cart, item] };
    }),

  removecart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  
    
     quantity: 1, // default value
  increase: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrease: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1, // prevent going below 1
    })),

  
}));

export default useStore;
