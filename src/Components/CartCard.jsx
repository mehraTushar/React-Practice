const CartCard = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 shadow-xl p-8 relative bg-white dark:bg-gray-700 text-black dark:text-white">
      {children}
    </div>
  );
};

export default CartCard;
