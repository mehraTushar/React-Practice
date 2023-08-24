import { imgUrl } from "../config";

function MenuItem({ Item }) {
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
      <div className=" w-1/6">
        <img
          src={imgUrl + Item.imageId}
          loading="lazy"
          className=" rounded"
        ></img>
      </div>
    </div>
  );
}

export default MenuItem;
