import AddItem from "./AddItem";
const CartItem = ({ item }) => {
  //   console.log(item);
  return (
    <div className="flex justify-between items-center">
      <div className="break-normal max-w-[10rem] flex-grow">{item.Name}</div>
      <div className="">
        <AddItem
          item={item}
          cart={item.Quantity}
          className="bg-slate-50 text-green-500 flex gap-5 justify-evenly py-1 px-1 mx-1 border border-gray-400 font-bold rounded"
        ></AddItem>
      </div>
      <div className="">₹{(item.price * item.Quantity) / 100}</div>
    </div>
  );
};

export default CartItem;
