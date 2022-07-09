import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Slices/cart/cartSlice";

function GridItemBtn(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="h-10 w-40 bg-red hover:bg-light-red text-white font-bold py-2 rounded-md shadow-lg"
        onClick={() => {
          const product = {
            name: props.name,
            price: props.price,
            image: props.image,
            alt: props.alt,
          };
          dispatch(
            addItemToCart({
              product,
            })
          );
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

function SideMenuBtn(props) {
  const location = useLocation();
  let sideBtnClass;
  if (location.pathname === props.link) {
    sideBtnClass = "h-14 w-64 bg-yellow text-lg font-bold rounded-md shadow-xl";
  } else {
    sideBtnClass =
      "h-14 w-64 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md shadow-xl";
  }
  return (
    <div>
      <Link to={`${props.link}`}>
        <button className={sideBtnClass}>{props.text}</button>
      </Link>
    </div>
  );
}

function FormBtn({text, func}) {
    return (
        <button className="h-12 w-70 bg-yellow hover:bg-light-red text-lg p-2 rounded-md" onClick={func}>{text}</button>
    )
}

function ReceivedBtn(props) {
  return (
    <div>
      <button className="h-12 w-40 bg-pizza hover:bg-yellow ext-white text-lg font- p-2 rounded-md">
        {props.text}
      </button>
    </div>
  );
}

export { GridItemBtn, SideMenuBtn, FormBtn, ReceivedBtn };
