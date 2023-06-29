import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckOutProduct from './CheckOutProduct'
function CheckOut() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_add"src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=900&t=st=1686936342~exp=1686936942~hmac=b6157c79ff8fd425dab18f9f80e028ca1ce8035054816a48c0e276f00dded2ba" alt="" />
            
        <div>
            <h2 className="checkout_basket">Your Shopping Basket</h2>

            {basket.map(item=>(
              <CheckOutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
            </div> 
           <div className="checkout_right">
            <Subtotal/>
            <h2 class="checkout_title">The subtotal will go here</h2>
            </div>        
      
    </div>
  )
}

export default CheckOut

