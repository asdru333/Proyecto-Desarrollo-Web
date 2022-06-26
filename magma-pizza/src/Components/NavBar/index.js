import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Resources/Images/logo_magma_pizza.png";
import './navbar.css';
import Dropdown from './dropdown';
import {TiShoppingCart} from "react-icons/ti";
import Mixpanel from '../../Services/mixpanel';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  /** 
  const onMouseEnter = () => {
    setDropdown(true);
  };
  
  const onMouseLeave = () => {
    setDropdown(false);
  };
  */
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="h-20 w-20" src={logo} alt="Logo"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <p
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Menú <i className='fas fa-caret-down' />
            </p>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/CreaTuPizza'
              className='nav-links'
              onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_CREATE_PIZZA);}}
            >
              Cree su propia pizza
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Login'
              className='nav-links'
              onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_LOGIN);}}
            >
              Inicie sesión
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/SobreNosotros'
              className='nav-links'
              onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_ABOUT_US);}}
            >
              Sobre nosotros
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contactenos'
              className='nav-links'
              onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_CONTACT_US);}}
            >
              Contáctenos
            </Link>
          </li>
          <div className='carrito'>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_CART);}}
            >
              Carrito
            </Link>
          </li>
          </div>
        </ul>
        <Link 
          to='/' 
          className='button ml-20 text-white text-6xl' 
          onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_CART);}}>
            <TiShoppingCart/>
        </Link> 
      </nav>
    </>
  );
}

export default Navbar;