import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, visible, setshowIndex }) => {
  return (
    <div>
      <div className="w-6/12 rounded-3xl mx-auto my-5 bg-[#131f2f] p-7 text-amber-50 shadow-lg shadow-cyan-950">
        <div
          className="flex justify-between text-center cursor-pointer"
          onClick={() => setshowIndex()}
        >
          <span className="text-xl font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{visible ? "⬆️" : "⬇️"}</span>
        </div>

        {visible && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
