import { createContext, useReducer } from "react";



export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
};

const INITIAL_STATE = {
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
  cartTotal: 0,
};
export const CartContext = createContext({});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_IS_OPEN:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }] =
    useReducer(cartReducer, INITIAL_STATE);

  // // const updateCartItemsReducer = (newCartItems) => {
  // //   const newCartCount = newCartItems.reduce(
  // //     (total, cartItem) => total + cartItem.quantity,
  // //     0
  // //   );

  // //   const newCartTotal = newCartItems.reduce(
  // //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  // //     0
  // //   );
  // //   dispatch(
  // //     createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
  // //       cartItems: newCartItems,
  // //       cartTotal: newCartTotal,
  // //       cartCount: newCartCount,
  // //     })
  // //   );
  // // };
  // const updateCartIsOpenReducer = (isCartOpen) => {
  //   dispatch(
  //     createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, isCartOpen)
  //   );
  // };




  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
