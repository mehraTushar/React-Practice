import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <section className="mx-auto max-w-7xl p-3 lg:px-7 flex flex-col justify-center items-center gap-4">
      <div className=" w-1/3">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" />
      </div>
      <div className="font-semibold text-xl">Your cart is empty</div>
      <div className="text-lg">
        You can go to home page to view more restaurants
      </div>
      <Link className=" bg-orange-500 text-white px-6  py-2 font-bold" to="/">
        See Resturants Near You
      </Link>
    </section>
  );
};

export default CartEmpty;
