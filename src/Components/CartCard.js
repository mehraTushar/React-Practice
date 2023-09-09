const CartCard = ({ children }) => {
  return (
    <div className=" flex flex-col gap-4 shadow-xl p-8 relative">
      {children}
    </div>
  );
};

export default CartCard;
