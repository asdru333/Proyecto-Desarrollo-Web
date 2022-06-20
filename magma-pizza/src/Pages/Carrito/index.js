import { CartItem } from "../../Components/MenuItem";
import { Link } from 'react-router-dom';

export default function Carrito() {
    return (
        <div>
            <h1 className = 'text-3xl text-center mt-6'>Mi carrito</h1>
            <div className = 'w-4/5 py-6 mt-5 m-auto grid grid-cols-4 gap-y-6'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className = 'flex flex-cols gap-x-8  mt-6 justify-center'>
                <p className = 'text-3xl'>Total: ₡9500</p>
                <Link to = {"/ConfirmarOrden"}>
                    <button class='h-10 w-40 bg-red hover:bg-light-red text-white text-lg font-bold'>Comprar</button>
                </Link>    
            </div>
        </div>
    );
}