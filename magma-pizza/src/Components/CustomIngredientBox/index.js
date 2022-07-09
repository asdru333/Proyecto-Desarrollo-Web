import React from "react";

function ColoredIngredientBox(props) {
  return (
    <div className="bg-red text-white rounded-3xl py-4">
      <h2 className="text-2xl text-center">{props.title}</h2>
      <div className="flex m-auto gap-x-8 justify-center text-xl pt-2 items-center">
        {props.children}
      </div>
    </div>
  );
}

function IngredientBox(props) {
  return (
    <div>
      <h2 className="text-2xl text-center">{props.title}</h2>
      <div className="flex m-auto gap-x-8 justify-center text-xl pt-2 align-items: center">
        {props.children}
      </div>
    </div>
  );
}

function IngredientOption(props) {
  return (
    <div className="inline-flex items-center gap-x-1">
      {props.children}
      <label>{props.text}</label>
    </div>
  );
}

export { IngredientBox, ColoredIngredientBox, IngredientOption };
