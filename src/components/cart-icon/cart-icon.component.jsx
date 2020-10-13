import React from 'react';
import { connect } from 'react-redux';

import { toggleCartView } from '../../redux/actions/ui.action';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartView }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartView} />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      toggleCartView: () => dispatch(toggleCartView()),
    };
};

export default connect(null, mapDispatchToProps)(CartIcon);