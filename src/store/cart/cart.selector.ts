import { CartState } from "./cart.reducer"

const selectCartReducer = (state: CartState) => state


export const selectCartCount = (state: CartState) => state.cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
)

export const selectCartTotal = (state: CartState) => state.cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
)