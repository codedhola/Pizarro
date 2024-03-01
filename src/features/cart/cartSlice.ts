import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: any, action: any){
      state.cart.push(action.payload)
    },
    deleteItem(state: any, action: any){
      state.cart = state.cart.filter((item: any) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state: any, action: any){
      const item = state.cart.find((item: any) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state: any, action: any){
      const item = state.cart.find((item: any) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state: any){
      state.cart = []
    }
  }
})


export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any) => state.cart.cart;

export const getTotalCartQuantity = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: any) => (state: any) =>
  state.cart.cart.find((item: any) => item.pizzaId === id)?.quantity ?? 0;
