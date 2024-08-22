import CartCard from './CartCard';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  faCircleUser,
  faLocationDot,
  faWallet,
  faCircleCheck,
  faCircleXmark,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import CartDetails from './CartDetails';
import CartEmpty from './CartEmpty';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartNotLoggedIn } from './CartNotLoggedIn';
import useLocation from '../hooks/useLocation';
import { useForm } from 'react-hook-form';

const Cart = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const cartList = useSelector((state) => state.Resturant.cartItems);
  const userId = useLocalStorage('loggedInUser');
  const [address, setAddress] = useState('');
  const { latitude, longitude, loading: locationLoading } = useLocation();

  function onSubmit(data) {
    const res = data;

    useSwalToast('error', 'Please Enter Correct Password');
    return;
  }

  useEffect(() => {
    if (latitude && longitude && !locationLoading) {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=82506e379b8446e8a633673faa199756`
      )
        .then((response) => response.json())
        .then((result) => setAddress(result.features[0].properties.formatted))
        .catch((error) => console.log('Error fetching address:', error));
    }
  }, [latitude, longitude, locationLoading]);

  const handlePayment = () => {
    Swal.fire({
      title: 'Payment',
      html: `
      <form onSubmit="${handleSubmit(onSubmit)}">
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Card Number">
        </div>
        <section class='flex justify-start gap-2'>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Expiry Date">
          </div>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <i class="fa-brands fa-cc-visa"></i>
            </div>
            <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CVV">
          </div>
        </section>
        <button class="swal2-confirm swal2-styled" style="width: 100%; margin-top: 1rem;">
          Pay $10.00
        </button>
        </form>
      `,
      showConfirmButton: false,
      customClass: {
        popup: 'custom-swal-width',
      },
    });
  };

  if (cartList.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className="mx-auto max-w-7xl p-6 lg:px-8 flex bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col gap-10 flex-grow">
        <CartCard>
          <CartNotLoggedIn userId={userId} />
        </CartCard>
        <CartCard>
          <div className="text-xl font-semibold">
            Delivery address
            <FontAwesomeIcon icon={faCircleCheck} size="xl" className="text-green-500 ml-2" />
          </div>
          <div className="text-xl font-semibold">{locationLoading ? 'Fetching Location...' : address}</div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} size="3x" className="absolute top-10 -left-6" />
            <div className="absolute top-20 w-0.5 h-full -left-2 bg-black"></div>
          </div>
        </CartCard>
        <CartCard>
          <div className="text-xl font-semibold">Choose payment method</div>
          <button className="bg-green-500 font-bold text-white text-xl p-6 rounded" onClick={handlePayment}>
            Proceed To Pay
          </button>
          <div>
            <FontAwesomeIcon icon={faWallet} size="3x" className="absolute top-10 -left-9" />
          </div>
        </CartCard>
      </div>
      <CartDetails />
    </section>
  );
};

export default Cart;

function paymentSubmit() {}
