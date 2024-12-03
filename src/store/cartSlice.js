import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    setCart: (state, action) => {
      const { items, totalPrice } = action.payload;
      state.items = items;
      state.totalPrice = totalPrice;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const uniqueKey = `${item.name}-${item.category}`;
      const existingItem = state.items.find((i) => i.uniqueKey === uniqueKey);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += item.price;
      } else {
        state.items.push({ ...item, uniqueKey, quantity: 1 });
        state.totalPrice += item.price;
      }
    },
    removeFromCart: (state, action) => {
      const uniqueKey = action.payload;
      const itemIndex = state.items.findIndex((i) => i.uniqueKey === uniqueKey);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const uniqueKey = action.payload;
      const item = state.items.find((i) => i.uniqueKey === uniqueKey);

      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (state, action) => {
      const uniqueKey = action.payload;
      const itemIndex = state.items.findIndex((i) => i.uniqueKey === uniqueKey);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice -= item.price;
        } else {
          // If the quantity is 1, remove the item
          state.totalPrice -= item.price; // Deduct the price before removing
          state.items.splice(itemIndex, 1); // Remove the item from the array
        }
      }
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
