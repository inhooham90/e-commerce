import { UIActionTypes } from "../actions/ui.action";
import { addItemToCart } from "../utils/cart.utils";

const INITIAL_STATE = {
    cartView: false,
    cartItems: []
}; 

const uIReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UIActionTypes.TOGGLE_CART_VIEW:
        return {
          ...state,
          cartView: !state.cartView,
        };

      case UIActionTypes.ADD_CART_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };

      default:
        return state;
    }
};

export default uIReducer;