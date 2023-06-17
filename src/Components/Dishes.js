import React, { useState } from "react";
// import Menu from '../menu'

export const Dishes = ({ name, key, category, description, price }) => {
  // const [items, setItem] = useState(Menu);

  return (
    <div key={key} className="border w-[26rem] my-2 p-5">
      <h1>Dish : {name}</h1>
      <h1>Category: {category} </h1>
      <h1>Price: {price} </h1>
      <h1>Description: {description}</h1>
    </div>
  );
};
