import CartCard from "./CartCard";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import {
  faCircleUser,
  faLocationDot,
  faWallet,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import CartDetails from "./CartDetails";
import CartEmpty from "./CartEmpty";
const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartItems);
  {
    return cartList.length === 0 ? (
      <CartEmpty />
    ) : (
      <section className="mx-auto max-w-7xl  p-6 lg:px-8 flex">
        <div className="flex flex-col gap-10 flex-grow  ">
          <CartCard>
            <div className=" text-xl font-semibold">
              <span>Please Login</span>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="xl"
                className=" text-red-500 ml-2"
              />
            </div>
            <div className=" text-xl font-semibold">Username | Phone No</div>
            <div>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="3x"
                className=" absolute top-10 -left-8 "
              />
              <div className="absolute top-20 w-0.5 h-full -left-2 bg-black"></div>
            </div>
          </CartCard>
          <CartCard>
            <div className=" text-xl font-semibold">
              Delivery address
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="xl"
                className=" text-green-500 ml-2"
              />
            </div>
            <div className=" text-xl font-semibold">Home</div>
            <div className=" text-xl font-semibold">
              Acme heights Ext 2 Sector 117
            </div>
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="3x"
                className=" absolute top-10 -left-6 "
              />
              <div className="absolute top-20 w-0.5 h-full -left-2 bg-black"></div>
            </div>
          </CartCard>
          <CartCard>
            <div className=" text-xl font-semibold">Choose payment method</div>
            <button className="bg-green-500 font-bold text-white text-xl p-6 rounded">
              Procced To Pay
            </button>
            <div>
              <FontAwesomeIcon
                icon={faWallet}
                size="3x"
                className=" absolute top-10 -left-9 "
              />
            </div>
          </CartCard>
        </div>
        <CartDetails />
      </section>
    );
  }
};

export default Cart;
