import React from "react"

import{FaEnvelope} from "react-icons/fa";
export default function Header(){
    return(
        <header>
           <div className="imgHeader"> 
            <img src="../gem.jpg" />             
           </div>
           
           <h1 className="header-h1">Binyamin Touthang</h1>
           <h3 className="header-h3"> Web developer</h3>
           <h5 className="header-h5"> zonggem22.com </h5>
            
           <button type="button"  onclick="alert(benyamintouthang22@gmail.com)"> <FaEnvelope className="email"/> Email </button>
          
        </header>
    )
}
