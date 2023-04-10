import React from 'react';
import './review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product,handelRemovefromcart }) => {
    let { id,name, img, quantity, price, ratings, shipping
    } = product
    return (
        <div className='review-porduct'>
            <div style={{ display: 'flex', gap: '20px' }}>
                <img src={img} alt="" className='review-img' />
                <div className="reviews">
                    <h3>{product.category}</h3>
                    <p>price: <span style={{ color: 'orange', fontWeight: 'bold' }}>$ {price}</span></p>
                    <p>quantity: <span style={{ color: 'orange', fontWeight: 'bold' }}>{quantity}</span> </p>
                    <p>shipping: <span style={{ color: 'orange', fontWeight: 'bold' }}>$ {shipping}</span> </p>
                </div>
            </div>

            <div className="delet-icon" onClick={()=>handelRemovefromcart(id)}>
            <FontAwesomeIcon className='delet-icon-icon' icon={faTrashCan} />
            </div>
        </div>
    );
};

export default ReviewItem;