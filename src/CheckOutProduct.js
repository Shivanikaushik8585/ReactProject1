import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckOutProduct({image,title,price,rating}){
  const[{basket},dispatch]=useStateValue();
    const removeBasket=()=>{
        dispatch({
            type:"REMOVEFROM_BASKET",
            title:title,

        })


   }
    return(
        <div className="checkoutProduct">
            <img className="checkOutProduct_image" src={image} />
            <div className='checkOutProduct_info'>
                <p classNmae="checkoutProduct_title">{title}</p>
                < p className="checkOutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkOutProduct_rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                        <p>*</p>

                    ))}
                </div>
                <button onClick={removeBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
export default CheckOutProduct;
