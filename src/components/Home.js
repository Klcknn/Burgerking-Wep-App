import { Link } from 'react-router-dom';
import React from 'react';
import HomeImage from "../images/banneryeni.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className='mainPage_div' style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className='orderPage_div'>
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;