import { create } from "zustand";
import _ from "lodash";
export const useStore = create((set) => ({
  cart: [],
  updateCart: (itemId, cartValue, name, image, total) =>
    set((state) => {
      const itemIndex = _.findIndex(state.cart, { id: itemId });
      if (itemIndex == false) {
        const updateCart = [...state.cart];
        updateCart[itemIndex] = {
          id: itemId,
          name: name,
          image: image,
          price: cartValue,
          total: total,
          totalPriceItem: cartValue * total,
        };
        return {
          cart: updateCart,
        };
      }
      return {
        cart: [
          ...state.cart,
          {
            id: itemId,
            name: name,
            image: image,
            price: cartValue,
            total: total,
            totalPriceItem: cartValue * total,
          },
        ],
      };
    }),
  test: () => console.log("test"),
}));
