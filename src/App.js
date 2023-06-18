import React, { useState } from "react";
import { Dishes } from "./Components/Dishes";
import { FilterBtn } from "./Components/FilterBtn";
import { Menu } from "./menu";

function App() {
  const [items, setItems] = useState(Menu);
  const allCat = [...new Set(Menu.map(elem => elem.category)), "all" ]
 
  // console.log(allCat);

  const [catItems, setCatItems] = useState(allCat)

  const handleFilter = (cat) =>{
    if(cat === "all"){
      setItems(Menu)
      return;
    }
      const updateItems = Menu.filter(elem => {
        return elem.category === cat ;
      })
      setItems(updateItems)
      console.log(updateItems);
  } 

  return (
    <>
      {/* {console.log(Menu)} */}
      <div className="w-full flex flex-col justify-center items-center p-5">
        <h1 className="text-2xl font-semibold">Order Your Fav Dish</h1>
        <FilterBtn handleFilter={handleFilter} allCat={catItems}/>

        <div className="flex flex-wrap p-12 justify-between">
          {items.map((elem) => (
            <Dishes name={elem.name} key={elem.id} category={elem.category} description={elem.description} price={elem.price}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
