import {React, useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../Resources/Images/logo_magma_pizza.png";

function Header() {
  const [showMenuList, setShowMenuList] = useState(false);

  return (
    <>
      <div className="flex justify-around bg-pizza" >
        <a href="/"><img className="h-20 w-20" src={logo} alt="Logo"/></a>

        <div className="mt-7 text-lg hover:text-yellow" >
          <p  onClick={() => { setShowMenuList(true); } } className="h-8 w-8 cursor-pointer">Menú</p>
        </div> 
        <div className="mt-7 text-lg hover:text-yellow" >
          <Link to="/">Cree su propia pizza</Link>
        </div>
        <div className="mt-7 text-lg hover:text-yellow" >
          <Link to="/Login">Inicie sesión</Link> 
        </div>
        <div className="mt-7 text-lg hover:text-yellow" >
          <Link to="/SobreNosotros">Sobre nosotros</Link> 
        </div>
       <div className="mt-7 text-lg hover:text-yellow" >
          <Link  to="/Contactenos">Contáctenos</Link>
        </div>
        <a href="/"><img className="h-20 w-20" src="https://rb.gy/3ueukh" alt="Logo Swap it"/></a>
      </div>
      {
        showMenuList && (
        <>
          <div onClick={() => { setShowMenuList(false); }} className="fixed top-0 left-0 h-full w-full"></div>
            <div className="bg-pizza pb-2 fixed ml-3 lg:left-80 md:left-36 top-16 h-auto w-[170px]">
            {
              <>
                <div className="pt-2 pl-4">
                  <p className="cursor-pointer text-lg hover:text-yellow">
                    <Link to="/">Pizzas</Link>
                  </p>
                </div>
                <div className="pt-2 pl-4">
                  <p className="cursor-pointer text-lg hover:text-yellow">
                    <Link to="/">Bebidas</Link>
                  </p>
                </div>
                <div className="pt-2 pl-4">
                  <p className="cursor-pointer text-lg hover:text-yellow">
                    <Link to="/Acompanamientos">Acompañamientos</Link>
                  </p>
                </div>
                <div className="pt-2 pl-4">
                  <p className="cursor-pointer text-lg hover:text-yellow">
                    <Link to="/">Postres</Link>
                  </p>
                </div>
                <div className="pt-2 pl-4">
                  <p className="cursor-pointer text-lg hover:text-yellow">
                    <Link to="/">Promociones</Link>
                  </p>
                </div>
              </>
            }
          </div>
        </>
        )        
      }
    </>
  );
}

export default Header;