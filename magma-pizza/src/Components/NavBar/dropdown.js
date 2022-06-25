import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
            <Link className='dropdown-link' to='/Pizzas' onClick={() => setClick(false)}>
                Pizza
            </Link>

        </li>
        <li>
            <Link className='dropdown-link' to='/Bebidas' onClick={() => setClick(false)}>
                Bebidas
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Acompanamientos' onClick={() => setClick(false)}>
                Acompañantes
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Postres' onClick={() => setClick(false)}>
                Postres
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Promos' onClick={() => setClick(false)}>
                Combos y promociones
            </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;