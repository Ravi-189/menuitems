import React from "react";
import "./Items.css";

function Items(props) {
    return ( 
        <div>
        
        <div className="imgg">
        <img src= {props.img} width = "180" height = "180" />
        </div>
        
        
        <div className="itemdata">
           <h3>{props.name}</h3>
           <p>{props.para}</p>     
           <h4>{props.price}</h4>
        </div>
        
        </div>

     );
}

export default Items;