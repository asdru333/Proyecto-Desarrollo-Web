import { Link } from 'react-router-dom';

export default function ConfirmarOrden() {
    return (
        <div>  
            <h1 className = 'text-3xl text-center mt-6'>Completa tu compra</h1>
            <div className = "flex flex-col gap-4 w-4/5 m-auto mt-5 p-5 items-center">
                <div className = "">
                    <p className = "text-lg">Pizza Grande Pepperoni ₡6800</p>
                </div>
                <div className = "">
                    <p className = "text-lg">Pizza Grande Pepperoni ₡6800</p>
                </div>
                <div className = "">
                    <p className = "text-lg">Pan de ajo ₡900</p>
                </div>
                <div className = "">
                    <p className = "text-lg">Coca Cola 3L ₡2000</p>
                </div>
                <div className = "">
                    <p className = "text-2xl">Total: ₡16500</p>
                </div>
            </div>

            <div className = "flex w-9/12 m-auto gap-x-4 p-5 justify-center text-lg">
                <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="store" defaultChecked name="pickup"/> Recoger en la tienda</div>
                <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="pickup"/> Express</div>
            </div>

            <div className = "flex w-9/12 m-auto justify-center">
                <label className = "text-lg text-slate-900 text-center">
                    Ingrese su nombre 
                    <input
                        name="name"
                        type="text"
                        className="mb-6 mt-1 block px-2 py-2 w-64 h-10
                        bg-white border border-slate-300 rounded-md text-lg shadow-lg text-slate-900 
                        focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                    />
                </label>
            </div>
            <div className = "flex w-9/12 m-auto justify-center gap-x-10 pb-5">
                <button className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md">Confirmar compra</button>
                <Link to={"/Carrito"}>
                    <button className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md">Volver al carrito</button>
                </Link>
            </div>
        </div>
    );
}