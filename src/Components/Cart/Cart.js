import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total =cart.reduce((total,subject) => total + subject.price,0);
    return (
        <div>
            <h3>Total item ordered:{cart.length}</h3>
            <p>Total price:{total}</p>
        </div>
    );
};

export default Cart;