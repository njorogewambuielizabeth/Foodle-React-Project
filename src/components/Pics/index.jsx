import React from "react";
import "./style.css"; 

const Display = () => {
  return (
    <div className="three-images">
        <div className="pic1">
            <h1>25% Discount</h1>
        <img src="bigBugger.jpeg" alt="Image 1" className="big1"/>
        </div>

        <div className="pic2">
        <img src="dessert.jpeg" alt="Image 2" className="big2" />
        </div>

        <div className="pic3">
        <img src="tacos.jpeg" alt="Image 3" className="big3" />
        </div>
      
    
     
    </div>
  );
};

export default Display;
