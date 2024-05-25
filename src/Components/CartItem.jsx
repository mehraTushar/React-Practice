import AddItem from './AddItem';

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex-grow">{item.Name}</div>
      <div>
        <AddItem item={item} cart={item.Quantity} className="bg-green-500 text-white rounded font-semibold" />
      </div>
      <div>₹{(item.price * item.Quantity) / 100}</div>
    </div>
  );
};

export default CartItem;
