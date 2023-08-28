import { useState } from "react";
import { imgUrl } from "../config";
import AddItem from "./AddItem";

function MenuItem({ Item }) {
  const [isAddActive, setIsaddActive] = useState(false);
  //   console.log(Item);
  return (
    <div className=" flex justify-between pt-10">
      <div className=" flex flex-col gap-1">
        <h3 className="font-bold">{Item.name}</h3>
        <p className=" font-semibold">
          ₹
          {Item.defaultPrice == null
            ? Item.price / 100
            : Item.defaultPrice / 100}
        </p>
        <p className=" max-w-3xl text-gray-500">{Item.description}</p>
      </div>
      <div className=" w-1/6 relative">
        <img
          onError={(i) => (i.target.style.display = "none")}
          src={imgUrl + Item.imageId}
          loading="lazy"
          className=" rounded"
        ></img>
        {isAddActive ? (
          <AddItem setIsaddActive={setIsaddActive}></AddItem>
        ) : (
          <AddBtn setClick={setIsaddActive}>Add</AddBtn>
        )}
      </div>
    </div>
  );
}

export default MenuItem;

function AddBtn({ children, setClick }) {
  return (
    <button
      onClick={() => setClick(true)}
      type="button"
      className=" bg-slate-50 text-green-500 py-2 px-8 absolute -bottom-2 border border-gray-400 left-16 font-bold rounded"
    >
      {children}
    </button>
  );
}
