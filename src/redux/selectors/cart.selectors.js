import { createSelector } from 'reselect';

const selectCart = state => state.ui;

export const selectCartItems = createSelector(
    [selectCart],
    (ui) => ui.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    ui => ui.cartView
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)