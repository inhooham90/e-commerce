export const UIActionTypes = {
    TOGGLE_CART_VIEW: 'TOGGLE_CART_VIEW',
    ADD_CART_ITEM: 'ADD_CART_ITEM',
};

export const toggleCartView = () => {
  return {
    type: UIActionTypes.TOGGLE_CART_VIEW,
  };
};

export const addItem = item => {
  return {
    type: UIActionTypes.ADD_CART_ITEM,
    payload: item
  };
};