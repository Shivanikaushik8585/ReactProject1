import React  ,{useState}from "react";
import "./Login.css"
import { Link } from "react-router-dom";
// import {auth} from "./firebase"
function Login(){
    const [ email,setEmail]= useState(" ");
    const [password,setPassword] = useState(" ")
  
 function SignIn(){

 }
 function register(){
    
 }
    
    return(
        <div className="login">
            <Link to="/">

            <img className="login_log" src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" />
            </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                 <input type="text" value={email} onChange={e =>setEmail(e.target.value)}/>
                 <h5>Password</h5>
                 <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                 <button onClick={SignIn} className="login_singhButton">Sign In</button>

                         </form>
           <p>By singning-in you agree to Amazon's Condition of Use 7 Sale.Please see our Privacy Notice ,our cookies Notice and our Interest-Based-Ads</p>             
           <button oClick={register} className="login_registrationButton">Create your Amazon Account</button>


        </div>



        </div>


    )
}

export default Login;