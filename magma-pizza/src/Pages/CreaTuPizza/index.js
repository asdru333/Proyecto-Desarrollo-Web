import { useDispatch } from "react-redux";
import { postCustomPizza } from "../../Slices/pizzas/requests/postCustomPizza";
import {
  ColoredIngredientBox,
  IngredientBox,
  IngredientOption,
} from "../../Components/CustomIngredientBox";
import { useEffect, useState } from "react";

export default function CreaTuPizza() {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");
  const [prevPrices, setPrevPrices] = useState({
    size: 0,
    crust: 0,
    sauce: 0,
    cheese: 0,
  });
  const [meats, setMeats] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [extras, setExtras] = useState([]);
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsFetch = await fetch(
        "http://localhost:7500/ingredients/"
      );
      const ingredientsJSON = await ingredientsFetch.json();
      setIngredients(ingredientsJSON);
      setLoading(false);
    };
    fetchIngredients();
  }, []);

  const handleRadioChange = (setter, item, name, itemPrice) => {
    if (prevPrices[name] !== 0) {
      let newPrice = price - prevPrices[name] + itemPrice;
      setPrice(newPrice);
    } else {
      let newPrice = price + itemPrice;
      setPrice(newPrice);
    }
    setPrevPrices({ ...prevPrices, [name]: itemPrice });
    setter(item);
  };

  const handleCheckboxChange = (ingredient, setter, item, itemPrice) => {
    if (ingredient.some((option) => option === item)) {
      //remove item
      setter(ingredient.filter((option) => option !== item));
      setPrice(price - itemPrice);
    } else {
      setter([...ingredient, item]); //add item
      setPrice(price + itemPrice);
    }
  };

  return loading ? (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <h1 className="text-3xl text-center my-5">Crea tu propia pizza</h1>
      <div className="flex flex-col w-9/12 gap-y-5 justify-center m-auto">
        <IngredientBox title="Tamaño">
          {ingredients &&
            ingredients.sizes.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="radio"
                    value={`${i.value}`}
                    name="size"
                    onChange={(evt) => {
                      handleRadioChange(
                        setSize,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Pastas">
          {ingredients &&
            ingredients.crusts.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="radio"
                    value={`${i.value}`}
                    name="crust"
                    onChange={(evt) => {
                      handleRadioChange(
                        setCrust,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <IngredientBox title="Salsas">
          {ingredients &&
            ingredients.sauces.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="radio"
                    value={`${i.value}`}
                    name="sauce"
                    onChange={(evt) => {
                      handleRadioChange(
                        setSauce,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Quesos">
          {ingredients &&
            ingredients.cheeses.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="radio"
                    value={`${i.value}`}
                    name="cheese"
                    onChange={(evt) => {
                      handleRadioChange(
                        setCheese,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <IngredientBox title="Carnes">
          {ingredients &&
            ingredients.meats.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="checkbox"
                    value={`${i.value}`}
                    name="meat"
                    onChange={(evt) => {
                      handleCheckboxChange(
                        meats,
                        setMeats,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Vegetales y Frutas">
          {ingredients &&
            ingredients.vegetables.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="checkbox"
                    value={`${i.value}`}
                    name="vegetable"
                    onChange={(evt) => {
                      handleCheckboxChange(
                        vegetables,
                        setVegetables,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <IngredientBox title="Extras">
          {ingredients &&
            ingredients.extras.map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <input
                    className="form-radio text-yellow h-5 w-5"
                    type="checkbox"
                    value={`${i.value}`}
                    name="extra"
                    onChange={(evt) => {
                      handleCheckboxChange(
                        extras,
                        setExtras,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <hr className="border-red" />
        <h2 className="text-2xl text-center">Costo: ₡{price}</h2>
        <div className="flex w-9/12 m-auto justify-center gap-x-10 pb-5">
          <button className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
