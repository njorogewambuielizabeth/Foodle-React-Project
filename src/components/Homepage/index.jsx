import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className='home'>

        <div className='text'>
        <h1>All Fast Food is <br/> Available at Foodle</h1>
        <img src="profile.jpeg" alt="small nigga" className='profile'  />
        <p>We Are Just A Click Away When You <br/> Crave For Delicious Fast Food </p>
        <br/>
        <button>  <img src="" alt=""  />  Buy Now</button>
        <br/>
        <div className='order'>
        <img src="play.png" alt="play" className='play'/>
         <h3>How To Order</h3>
        </div>
        
        <br/>
        <br/>
        </div>
   

<div className='hum'>
<img src="humberger.jpeg" alt="big Humberger" className='burger' />
</div>
<br/> <br/> <br/>
        

        <div className='three-pics'>
            <div>
            <img src="fast.jpeg" alt="fast delivery" />
            <h3>Fast Delivery</h3>
            <p>The Food Will Be Delivered To <br/> Your Home Within 1-2 Hours Of Your Ordering</p>
            </div>

            <div>
            <img src="fresh.jpeg" alt="fresh food" />
            <h3>Fresh Food</h3>
            <p>Your Food Will Be Delivered <br/> 100% Fresh To Your Home,We <br/>Do Not Deliver Stale Food</p>
            </div>

            <div>
            <img src="free.png" alt="free delivery" />
            <h3>Free Delivery</h3>
            <p>Your Food Delivery Is <br/> Absolutely Free. No Cost<br/>Just Order And Enjoy</p>
            </div>
          
            
        </div>
        <br/> <br/>
    </div>
    



  
  );
};

export default Home;
