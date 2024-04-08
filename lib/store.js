import { create } from "zustand";

export const useStore = create((set) => ({
  cart: 9,
}));
