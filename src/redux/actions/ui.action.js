export const UIActionTypes = {
    TOGGLE_CART_VIEW: 'TOGGLE_CART_VIEW',
};

export const toggleCartView = () => {
  return {
    type: UIActionTypes.TOGGLE_CART_VIEW,
  };
};