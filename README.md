
# React Router Usage :
    
    <Route path="/" exact element={ <Home /> } />

## On The Terminal Code Editor:
### Material UI install :

`npm install @mui/material @emotion/react @emotion/styled`
### React Router install :

`npm install react-router-dom`

`App.js`

    import './App.css';
    import { Routes, Route } from "react-router-dom"  // terminal code : npm i react-router-dom 
    import Home from './components/Home';
    import Menu from './components/Menu';
    import About from './components/About';
    import Contact from './components/Contact';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';

    function App() {
    return (
        <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/menu" exact element={ <Menu />} />
            <Route path="/about" exact element={ <About /> } />
            <Route path="/contact" exact element={ <Contact /> } />
        </Routes>
        <Footer />
        </div>
    );
    }

    export default App;

`Navbar.js`

    import React from 'react';
    import { Link } from 'react-router-dom';
    import BurgerLogo from "../images/burgerkinglogo.png"; 
    import "../styles/Navbar.css";

    function Navbar() {
    return (
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt='Burger Resmi' />
                <div className='main_link'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
    }

    export default Navbar;

`Menu.js`

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

`MenuItem.js`

    import React from 'react';

    function MenuItem( { image, name, content, price } ) {
    return (
        <div className='menuItem'>
            <div style={ { backgroundImage: `url(${image})` } }></div>
            <h1 style={ { marginBottom: "10px" } }>{name}</h1>
            <h6 style={ { marginTop: "0px" } }>{content}</h6>
            <p>
                <i style={ { color: "red" } }>{price} TL</i>
            </p>
        </div>
    )
    }

    export default MenuItem;

`Footer.js`

    import React from 'react';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import "../styles/Footer.css";
    function Footer() {
    return (
        <div className='footer'>
        <div className='social_media_icon'> 
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
        </div>
        <p></p>
        </div>
    )
    }

    export default Footer;

