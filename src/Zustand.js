

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

  addtocart: (item) => {
    set((state) => ({ cart: [...state.cart, item] }));
  },
  removecart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  
  generateProductContent: async ({ productName, productCategory, productFeatures, lang = 'en' }) => {
    set({ loading: true, error: null });

    const url = 'https://kohls.p.rapidapi.com/products/search-by-barcode?upc=194574942221';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '87d7a7ef21mshe617bebe230e9dfp17a540jsnd28d05b0051b',
        'x-rapidapi-host': '87d7a7ef21mshe617bebe230e9dfp17a540jsnd28d05b0051b',
       
      },

      body: JSON.stringify({
        productName,
        productCategory,
        productFeatures,
        lang,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Use `.json()` if the API returns JSON
      set({ productContent: result, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
