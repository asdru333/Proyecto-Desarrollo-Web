import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postCustomPizza } from "../../Slices/pizzas/requests/postCustomPizza";

export default function CreaTuPizza() {
    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [sauce, setSauce] = useState("");
    const [cheese, setCheese] = useState("");
    const [prevPrices, setPrevPrices] = useState({
      size : 0,
      crust : 0,
      sauce : 0,
      cheese : 0
    });
    const [meats, setMeats] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [extras, setExtras] = useState([]);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const handleRadioChange = (setter, item, name, itemPrice) => {
      if(prevPrices[name] !== 0){
        let newPrice = price - prevPrices[name] + itemPrice;
        setPrice(newPrice);
      } else {
        let newPrice = price + itemPrice;
        setPrice(newPrice);
      }
      setPrevPrices({...prevPrices, [name] : itemPrice});
      setter(item);
    }

    const handleCheckboxChange = (ingredient, setter, item, itemPrice) => {
      if (ingredient.some(option => option === item)) { //remove item
        setter(ingredient.filter(option => option !== item));
        setPrice(price - itemPrice);
      } else {
        setter([...ingredient,item]); //add item
        setPrice(price + itemPrice);
      }
    }

    return (
        <div>  
            <h1 className = 'text-3xl text-center my-5'>Crea tu propia pizza</h1>
            <div className="flex flex-col lg:w-9/12 cel:w-full gap-y-5 justify-center m-auto">
                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = "text-2xl text-center">Tamaño</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="small" name="size" onChange={(evt) => {handleRadioChange(setSize, evt.target.value, evt.target.name, 1000); }}/> Pequeña</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="medium" name="size" onChange={(evt) => {handleRadioChange(setSize, evt.target.value, evt.target.name, 2000); }}/> Mediana</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="large" name="size" onChange={(evt) => {handleRadioChange(setSize, evt.target.value, evt.target.name, 3000); }}/> Grande</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="monster" name="size" onChange={(evt) => {handleRadioChange(setSize, evt.target.value, evt.target.name, 4000); }}/> Monstruo</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = "text-2xl text-center">Pasta</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="thin" name="crust" onChange={(evt) => {handleRadioChange(setCrust, evt.target.value, evt.target.name, 0); }}/> Delgada</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="thick" name="crust" onChange={(evt) => {handleRadioChange(setCrust, evt.target.value, evt.target.name, 500); }}/> Gruesa</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="cheesy" name="crust"onChange={(evt) => {handleRadioChange(setCrust, evt.target.value, evt.target.name, 800); }}/> Cheesy</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = "text-2xl text-center">Salsas</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="tomato" name="sauce" onChange={(evt) => {handleRadioChange(setSauce, evt.target.value, evt.target.name, 200); }}/> Tomate</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="alfredo" name="sauce" onChange={(evt) => {handleRadioChange(setSauce, evt.target.value, evt.target.name, 400); }}/> Alfredo</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="bbq" name="sauce" onChange={(evt) => {handleRadioChange(setSauce, evt.target.value, evt.target.name, 400); }}/> BBQ</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = "text-2xl text-center">Quesos</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="three" name="cheese"  onChange={(evt) => {handleRadioChange(setCheese, evt.target.value, evt.target.name, 300); }}/> Tres quesos</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="parm" name="cheese" onChange={(evt) => {handleRadioChange(setCheese, evt.target.value, evt.target.name, 400); }}/> Parmesano y Romano</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="radio" value="blue" name="cheese" onChange={(evt) => {handleRadioChange(setCheese, evt.target.value, evt.target.name, 400); }}/> Queso azul</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = "text-2xl text-center">Carnes</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="ham" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 100); }}/> Jamón</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="beef" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 200); }}/> Carne molida</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="bacon" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 200); }}/> Tocineta</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="pepperoni" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 300); }}/> Pepperoni</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="chicken" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 200); }}/> Pollo</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="sausage" name="meat" onChange={(evt) => {handleCheckboxChange(meats, setMeats, evt.target.value, 250); }}/> Salchicha</div>
                    </div>
                </div>

                <div className="">
                    <h2 className = "text-2xl text-center">Vegetales y Frutas</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="onions" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables, evt.target.value, 50); }}/> Cebolla</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="peppers" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables,evt.target.value, 50); }}/> Chile</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="olives" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables,evt.target.value, 100); }}/> Aceitunas</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="mushrooms" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables,evt.target.value, 100); }}/> Hongos</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="tomatoes" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables,evt.target.value, 50); }}/> Rodajas de tomate</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="pineapple" name="vegetables" onChange={(evt) => {handleCheckboxChange(vegetables, setVegetables, evt.target.value, 10000); }}/> Piña</div>
                    </div>
                </div>

                <div className="bg-red text-white rounded-3xl py-4">
                    <h2 className = "text-2xl text-center">Extras</h2>
                    <div className = "flex m-auto lg:gap-x-8 cel:gap-x-4 justify-center lg:text-xl cel:text-base pt-2">
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="cheese" name="extra" onChange={(evt) => {handleCheckboxChange(extras, setExtras, evt.target.value, 400); }}/> Queso extra</div>
                        <div><input className="form-radio text-yellow h-5 w-5" type="checkbox" value="sauce" name="extra" onChange={(evt) => {handleCheckboxChange(extras, setExtras, evt.target.value, 200); }}/> Salsa extra</div>
                    </div>
                </div>

                <h2 className = 'text-2xl text-center'>Costo: ₡{price}</h2>

                <div className = "flex w-9/12 m-auto justify-center gap-x-10 py-5">
                    <button className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}