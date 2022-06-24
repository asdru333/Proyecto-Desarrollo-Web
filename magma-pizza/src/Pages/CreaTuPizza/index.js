export default function CreaTuPizza() {
    return (
        <div>  
            <h1 className = 'text-3xl text-center my-5'>Crea tu propia pizza</h1>

            <div className="flex flex-col w-9/12 gap-y-5 justify-center m-auto">

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = 'text-2xl text-center'>Tamaño</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="store" defaultChecked name="size"/> Pequeña</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="size"/> Mediana</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="size"/> Grande</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="size"/> Monstruo</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = 'text-2xl text-center'>Pasta</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="store" defaultChecked name="crust"/> Delgada</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="crust"/> Gruesa</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="crust"/> Cheesy</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = 'text-2xl text-center'>Salsas</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="store" defaultChecked name="sauce"/> Tomate</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="sauce"/> Alfredo</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="sauce"/> BBQ</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = 'text-2xl text-center'>Quesos</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="store" defaultChecked name="cheese"/> Tres quesos</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="cheese"/> Parmesano y Romano</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="express" name="cheese"/> Queso azul</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = 'text-2xl text-center'>Carnes</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" defaultChecked name="meat"/> Jamón</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="meat"/> Carne molida</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="meat"/> Tocineta</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="meat"/> Pepperoni</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="meat"/> Pollo</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="meat"/> Salchicha</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = 'text-2xl text-center'>Vegetales y Frutas</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="store" defaultChecked name="vegetables"/> Cebolla</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="vegetables"/> Chile</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="vegetables"/> Aceitunas</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="vegetables"/> Hongos</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="vegetables"/> Rodajas de tomate</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="vegetables"/> Piña</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = 'text-2xl text-center'>Extras</h2>
                    <div className = "flex m-auto gap-x-8 justify-center text-xl pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="store" defaultChecked name="extra"/> Queso extra</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="express" name="extra"/> Salsa extra</div>
                    </div>
                </div>

                <h2 className = 'text-2xl text-center'>Costo: ₡8900</h2>

                <div className = "flex w-9/12 m-auto justify-center gap-x-10 py-5">
                    <button className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}