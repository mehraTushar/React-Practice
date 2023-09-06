import AddItem from "./AddItem";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLocationDot,
  faWallet,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  {
    Swal.fire("Alert!", "This Feature is Under Development", "error");
  }
  return (
    <section className="mx-auto max-w-7xl  p-6 lg:px-8 flex">
      <div className="flex flex-col gap-10 flex-grow  ">
        <div className=" flex flex-col gap-4 shadow-xl p-8 relative">
          <div className=" text-xl font-semibold">Please Login ❌</div>
          <div className=" text-xl font-semibold">Username | Phone No</div>
          <div>
            <FontAwesomeIcon
              icon={faCircleUser}
              size="3x"
              className=" absolute top-10 -left-8 "
            />
            <div className="absolute top-20 w-0.5 h-full -left-2 bg-black"></div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 shadow-xl p-8 relative">
          <div className=" text-xl font-semibold">
            Delivery address{" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="1x"
              className=" text-green-500"
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
        </div>
        <div className=" flex flex-col gap-4 shadow-xl p-8 relative">
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
        </div>
      </div>
      <div className=" h-full w-96 p-6 shadow-2xl ml-8">
        <div className="flex justify-start items-center gap-3">
          <div className=" w-16">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/ghemfhdccguwa9bjjzxu"
              className=""
            />
          </div>
          <div>
            <p className=" font-semibold text-xl">Resturant Name</p>
            <p className=" text-lg">Address</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex justify-between items-center">
            <div>Gujia Desi Ghee [1 Kg]</div>
            <div className="">
              <AddItem className="bg-slate-50 text-green-500 flex gap-5 justify-evenly py-1 px-1 border border-gray-400 font-bold rounded"></AddItem>
            </div>
            <div>$2160</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Gujia Desi Ghee [1 Kg]</div>
            <div className="">
              <AddItem className="bg-slate-50 text-green-500 flex gap-5 justify-evenly py-1 px-1 border border-gray-400 font-bold rounded"></AddItem>
            </div>
            <div>$2160</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Gujia Desi Ghee [1 Kg]</div>
            <div className="">
              <AddItem className="bg-slate-50 text-green-500 flex gap-5 justify-evenly py-1 px-1 border border-gray-400 font-bold rounded"></AddItem>
            </div>
            <div>$2160</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Gujia Desi Ghee [1 Kg]</div>
            <div className="">
              <AddItem className="bg-slate-50 text-green-500 flex gap-5 justify-evenly py-1 px-1 border border-gray-400 font-bold rounded"></AddItem>
            </div>
            <div>$2160</div>
          </div>
        </div>

        <div className=" my-5">
          <input
            placeholder="Any suggestions? We will pass it on..."
            className="w-full focus:outline-none"
          />
        </div>
        <div className="border border-black flex justify-center items-center gap-3 p-4">
          <input type="checkbox" className=" self-start w-16 h-10" />
          <div>
            <p className=" font-semibold">Opt in for No-contact Delivery </p>
            <p className=" font-light">
              Unwell or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for
              COD)
            </p>
          </div>
        </div>
        <div className=" my-4">
          <p className="font-semibold">Bill Details</p>
          <div className="flex justify-between">
            <p>Item Total</p>
            <p>$3760</p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div className="flex justify-between">
            <p>Delivery Fee for 6.4 kms</p>
            <p>$3760</p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div className="flex justify-between">
            <p className=" font-bold">To Pay</p>
            <p className=" font-bold">$3000</p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">
              Review your order and address details to avoid cancellations
            </p>
            <p>
              <span className=" text-red-500 mr-1">Note:</span>
              If you cancel within 60 seconds of placing your order, a 100%
              refund will be issued. No refund for cancellations made after 60
              seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
            <a className=" text-red-500 underline font-semibold" href="#">
              Read cancellation policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
