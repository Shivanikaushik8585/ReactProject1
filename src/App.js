import React from "react";
import "./App.css";
import  Header from "./Header"
import Home from "./Home"
import "./App.css"
import {   Route, Routes} from "react-router-dom";
import CheckOut from "./CheckOut";
import Login from "./Login";

// import Home from "./Home";




function App() {
  return (
    

<div className="App">

  <Header/>
  <Routes>
  <Route path="/login" element={<Login/>} ></Route>
<Route path="/" element={<Home/>}></Route>
<Route path="/checkout" element={<CheckOut/>}></Route>



  </Routes>

    
  


</div>

  )
}

    
    

export default App;
