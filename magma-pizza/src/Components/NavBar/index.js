import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Resources/Images/logo_magma_pizza.png";
import './navbar.css';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  /** 
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
  */

  const onMouseEnter = () => {
    setDropdown(true);
  };
  
  const onMouseLeave = () => {
    setDropdown(false);
  };

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
            <p
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Menú <i className='fas fa-caret-down' />
            </p>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cree su propia pizza
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicie sesión
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/SobreNosotros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sobre nosotros
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contactenos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contáctenos
            </Link>
          </li>
          <div className='carrito'>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Carrito
            </Link>
          </li>
          </div>
        </ul>
        <Link to='/' className='button' onClick={closeMobileMenu}>
            <img className="h-20 w-20" src={logo} alt="Logo"/>
        </Link> 
      </nav>
    </>
  );
}

export default Navbar;