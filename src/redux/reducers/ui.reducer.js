import { UIActionTypes } from "../actions/ui.action";

const INITIAL_STATE = {
    cartView: false
}; 

const uIReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UIActionTypes.TOGGLE_CART_VIEW:
        return {
          ...state,
          cartView: !state.cartView,
        };

      default:
        return state;
    }
};

export default uIReducer;