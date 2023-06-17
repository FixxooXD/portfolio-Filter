import React from "react";

export const FilterBtn = ({ handleFilter, allCat }) => {
  return (
    <div className="flex justify-center items-center justify-between mt-4 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[60%] mt-[3rem]">
      {allCat.map((currentCat) => (
        <div
          onClick={() => handleFilter(currentCat)}
          className="px-2 py-1 lg:w-20 lg:h-10 text-xl flex justify-center items-center  bg-[#eab308]">
          {currentCat}
        </div>
        // console.log(currentCat)
      ))}

      {/* <div onClick={() => handleFilter("all")} className='px-2 py-1 lg:w-20 lg:h-10 text-xl flex justify-center items-center  bg-[#eab308]'>All</div>
      <div onClick={() => handleFilter("breakfast")} className='px-2 py-1 lg:w-24 lg:h-10 text-xl flex justify-center items-center  bg-[#eab308]'>Breakfast</div>
      <div onClick={() => handleFilter("lunch")} className='px-2 py-1 lg:w-20 lg:h-10 text-xl flex justify-center items-center  bg-[#eab308]'>Lunch</div>
      <div onClick={() => handleFilter("dinner")} className='px-2 py-1 lg:w-20 lg:h-10 text-xl flex justify-center items-center  bg-[#eab308]'>Dinner</div> */}
    </div>
  );
};
