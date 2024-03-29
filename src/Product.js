import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'


function Product({title,image,price,rating}) {
  const [{basket},dispatch]= useStateValue();
  console.log("this is basket",basket)
  const addToBasket =() =>{
  dispatch({
    type:'ADD_TO_BASKET',
    item:{
      
      title:title,
      image:image,
      price:price,
      rating:rating,
    },
  });
  }
  return (
    <div className="product">
        <div className="product_info">
        <p>{title} </p>
        <p className="productprice">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p>*</p>

           ) )}
            
        
            
        </div>
        </div>
        <img alt="this is image"src={image}/>
     <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
