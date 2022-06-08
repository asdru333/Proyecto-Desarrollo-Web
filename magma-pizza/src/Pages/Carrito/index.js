import { CartItem } from "../../Components/MenuItem";

export default function Carrito() {
    return (
        <div>
            <h1 class = "text-3xl text-center mt-6">Mi carrito</h1>
            <div class = "py-6 mt-5 mx-10 grid grid-cols-4 gap-y-6">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div class='flex flex-cols gap-x-8  mt-6 justify-center'>
                <p class="text-3xl">Total: ₡9500</p>
                <button class="h-10 w-40 bg-red hover:bg-light-red text-white text-lg font-bold">Comprar</button>
            </div>
        </div>
    );
}