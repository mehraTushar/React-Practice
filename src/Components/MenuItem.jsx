import { imgUrl } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Features/Cart/CartSlice';
import AddItem from './AddItem';

function MenuItem({ Item, Resturant }) {
  console.log(Item.id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems.find((x) => x.Id == Item.id)?.Quantity || 0);
  let currItem = {
    ResturantID: Resturant.id,
    ResturantName: Resturant.name,
    ResturantAreaName: Resturant.areaName,
    Id: Item.id,
    price: Item.defaultPrice === undefined ? Item.price : Item.defaultPrice,
    Name: Item.name,
    Quantity: 1,
  };

  return (
    <div className="flex justify-between py-10 border-b-2 dark:border-gray-700">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black dark:text-white">{Item.name}</h3>
        <p className="font-semibold text-black dark:text-white">
          ₹{Item.defaultPrice == undefined ? Item.price / 100 : Item.defaultPrice / 100}
        </p>
        <p className="max-w-3xl text-gray-500 dark:text-gray-400">{Item.description}</p>
      </div>
      <div className="w-1/6 relative">
        <img
          onError={(i) => (i.target.style.display = 'none')}
          src={imgUrl + Item.imageId}
          loading="lazy"
          className="rounded w-full object-cover"
        ></img>
        {cart !== 0 ? (
          <AddItem
            cart={cart}
            item={currItem}
            className="bg-slate-50 text-green-500 dark:bg-black dark:text-green-400 flex gap-5 justify-evenly py-2 px-4 absolute -bottom-2 border border-gray-400 dark:border-gray-600 left-14 font-bold rounded"
          ></AddItem>
        ) : (
          <button
            onClick={() => {
              dispatch(addItem(currItem));
            }}
            type="button"
            className="bg-slate-50 text-green-500 dark:bg-black dark:text-green-400 py-2 px-8 absolute -bottom-2 border border-gray-400 dark:border-gray-600 left-16 font-bold rounded"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
