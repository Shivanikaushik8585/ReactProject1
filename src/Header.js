import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from '@mui/material';
import{Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket},dispatch] = useStateValue();



  return (
    <div className='header'>
       <Link to="/">
   <img className="header_logo"  alt="this is img"src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"/>
       </Link>

    <div className="header_search">
       <input className="header_searchinput"   type='text'/>
    <SearchIcon className="header_searchIcon"/> 
         
          
    </div>
    <div className="header_nav">
        <div className='header_option'>
            <span className='header_optionLineOne'>
                    Hello Guest
            </span>
            <Link to="/login">

            <span className='header_optionLineTwo'>
                Sign-in    
            </span>
            </Link>
        </div>
        <div className='header_option'>
        <span className='header_optionLineOne'>
                    Returs
            </span>
            <span className='header_optionLineTwo'>
                & Orders    
            </span>
        
        </div>
        <div className='header_option'>
        <span className='header_optionLineOne'>
                    Your
            </span>
            <span className='header_optionLineTwo'>
                Prime  
            </span>
        </div>
        <Link to="/checkout">

        <div className="header_OptionlBasket">
        <ShoppingCartIcon/>
        <span className="header_optioninTwo header_basketCount">{basket?.length}</span>
   </div>
        </Link>
    </div>
    </div>
  )
}

export default Header