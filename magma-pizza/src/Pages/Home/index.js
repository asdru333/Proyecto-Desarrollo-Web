import portada from "../../Resources/Images/portada.png"
import { HomeItem } from "../../Components/MenuItem"
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>

      <div className="flex justify-center mt-10">
        <img className="h-1/4 w-5/6" src={portada} alt="portada"/>
      </div>

      <p className="text-center text-pizza text-3xl cel:text-lg cel:mx-10 mt-5 mb-10">
        Disfrute de nuestras pizzas, tanto de las clásicas como las innovadoras
      </p>

      <div className="lg:flex lg:justify-between cel:grid lg:mx-36 cel:mx-10 cel:gap-4 my-10">
          <HomeItem description= 'Pizza clásica de jamón' image= 'https://ci0137.s3.amazonaws.com/magma/pizzas/p%C3%ACzza_jam%C3%B3n.png' alt= 'Pizza de Jamón' />
          <HomeItem description= 'Pizza clásica de Pepperoni' image= 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_pepperoni.png' alt= 'Pizza de Pepperoni' />
          <HomeItem description= 'Pizza innovadora de texana' image= 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_texana.png' alt= 'Pizza texana' />
          <HomeItem description= 'Pizza innovadora caótica' image= 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_ca%C3%B3tica.png' alt= 'Pizza caótica' />
      </div>

      <div className="ml-36 cel:ml-10 mb-10" >
        <Link to="/Pizzas">
          <button className="h-12 w-52 bg-pizza hover:bg-yellow text-white text-lg rounded-md">Vea el menú de pizzas</button>
        </Link>
      </div>

      <div className="text-center text-pizza text-3xl cel:text-lg my-10">
        Si no puede decidir ¡Dale un vistazo a nuestras promociones!
      </div>

      <div className="lg:flex cel:grid lg:mx-36 cel:mx-10 lg:gap-56 cel:gap-4 my-10">
          <HomeItem description= '3 slices de pizza de jamón' image= 'https://ci0137.s3.amazonaws.com/magma/promos/3-slices-jamon.png' alt= '3 slices de pizza de jamón' />
          <HomeItem description= 'pizzas 2x1' image= 'https://ci0137.s3.amazonaws.com/magma/promos/doble-pizza-+jamon.png' alt= 'pizzas 2x1' />
      </div>

      <div className="ml-36 cel:ml-10 mb-10" >
        <Link to="/Promos">
          <button className="h-12 w-52 bg-pizza hover:bg-yellow text-white text-lg rounded-md">Vea el menú de combos</button>
        </Link>
      </div>

    </div>
  )
}