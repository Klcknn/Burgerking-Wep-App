import React from 'react';
import { Data } from "../Datas/Data";
import MenuItem from './MenuItem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menu_title'>Burgerlerimiz</h1>
      <div className='menu_list'>
        { Data.map((menuItem, key) => {
            return (
              <MenuItem key={key} image={menuItem.image} name={menuItem.name} content={menuItem.content} price={menuItem.price} />
            );
          })
        }
      </div>
    </div>
  )
}

export default Menu;