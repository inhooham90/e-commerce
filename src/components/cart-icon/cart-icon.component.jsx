import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartView } from '../../redux/actions/ui.action';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartView, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartView} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      toggleCartView: () => dispatch(toggleCartView()),
    };
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);