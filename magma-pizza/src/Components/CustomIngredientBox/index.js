import React from 'react';

function ColoredIngredientBox(props) {
  return <div>
    <div className="bg-red text-white rounded-3xl py-4">
      <h2 className="text-2xl text-center">{props.title}</h2>
      <div className="flex m-auto gap-x-8 justify-center text-xl pt-2 items-center">
        {props.children}
      </div>
    </div>
  </div>
}

function IngredientBox(props) {
  return <div>
    <div>
      <h2 className="text-2xl text-center">{props.title}</h2>
      <div className="flex m-auto gap-x-8 justify-center text-xl pt-2 align-items: center">
        {props.children}
      </div>
    </div>
  </div>
}

function IngredientOption(props) {
  return <div>
    <div className="inline-flex items-center gap-x-1">
      {props.children}
      <label>{props.text}</label>
    </div>
  </div>
}

export { IngredientBox, ColoredIngredientBox, IngredientOption }