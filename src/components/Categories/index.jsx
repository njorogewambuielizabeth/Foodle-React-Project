import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  return (
  <div>
    <div className='head'>
    <h1>Best  <span>Delivered</span> <br/> Categories</h1>
    <p>Here Are Some Of Our Best Distributed <br/>Categories. If You Want You Can Order <br/>From Here.</p>
    </div>
<br/>
    <div className='buga'>
      <div>
        <img src="chicken.png" alt="" />
        <h3>Chicken Burger</h3>
        <p>Order Now  <FontAwesomeIcon icon={faAngleRight} /></p>
       
      </div>

      <div>
        <img src="chickenPizza.jpeg" alt="" />
        <h3>Chicken Pizza</h3>
        <p>Order Now  <FontAwesomeIcon icon={faAngleRight} /></p>
      </div>

      <div>
        <img src="frenchFries.jpeg" alt="" />
        <h3>French Fries</h3>
        <p>Order Now  <FontAwesomeIcon icon={faAngleRight} /></p>
      </div>

    </div>
    
  </div>
  

      
    



  
  );
};

export default Categories;
