import React from 'react';
import { connect } from 'react-redux';

import { toggleCartView } from '../../redux/actions/ui.action';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartView, itemCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartView} />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      toggleCartView: () => dispatch(toggleCartView()),
    };
};

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);