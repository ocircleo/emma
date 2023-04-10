import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reciewitem/ReviewItem';
import './inventory.css'
import { removeFromDb } from '../../utilities/fakedb';
const Inventory = () => {
    let savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const handelRemovefromcart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(ele => <ReviewItem key={ele.id} product={ele} handelRemovefromcart={handelRemovefromcart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Inventory;