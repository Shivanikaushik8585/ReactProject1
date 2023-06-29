import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
// import { SportsBasketball } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
// function getBaketTotal(basket){
  // const [{basket},dispatch] = useStateValue();
  function Subtotal() {
    const [{basket},dispatch] = useStateValue();


  return (

    <div className="subtotal">
        <CurrencyFormat
      renderText={(value) =>(
       <>
        <p>SubTotal ({basket.length} items):<strong>{value}</strong></p>
      
            <small className="subtotal_gift">
                <input type='checkbox'/>THis order contain a gift
             </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}

        />
        <button>Proceed to checkOut</button>
        
      
    </div>
  );
}

export default Subtotal

