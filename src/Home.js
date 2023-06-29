import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <img  className="Home_img" src="https://www.dealsfreak.com/wp-content/uploads/2017/07/amazon-prime-day-sale-banner-767x371.png" alt="this is home page"/>
       <div className="home_row">
        <Product title='rework' price={12.99} image="https://5.imimg.com/data5/SELLER/Default/2021/8/GD/CE/HX/135742206/new-product-1000x1000.jpeg"  rating={5}/>
      <Product title="Leader Eat Last by Simon Sinek" price={23} image="https://cdn.shopify.com/s/files/1/1192/7528/products/leaders-eat-last-18011562705049_600x600_crop_center.jpg?v=1604522266" rating={4}/>

       </div>
       <div className="home_row">
        <Product title="Deep work by Cal NewPort" price="12" image="https://bookbins.in/wp-content/uploads/2021/05/Deep-Work-Cal-Newport-Buy-Online-Bookbins-1.png" rating={3} />
       
       <Product title="Leader Eat Last by Simon Sinek" price={23} image="https://cdn.shopify.com/s/files/1/1192/7528/products/leaders-eat-last-18011562705049_600x600_crop_center.jpg?v=1604522266" rating={3}/>
    
        
        
        <Product title="Realme Neo " price={23} image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423527/Croma%20Assets/Entertainment/Television/Images/252321_0_wforvj.png/mxw_640,f_auto" rating={3}/>
        </div>
        <div className="home_row"> 
        <Product title="Realme Neo " price={23} image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423527/Croma%20Assets/Entertainment/Television/Images/252321_0_wforvj.png/mxw_640,f_auto" rating={3}/>
        </div>
        
    
    </div>
    </div>

  )
}

export default Home
