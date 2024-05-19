import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../Features/Cart/CartSlice';

const AddItem = ({ className, item, cart }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${className} flex items-center`}>
      <button
        className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        onClick={() => dispatch(removeItem(item))}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className="mx-4 text-black dark:text-white">{cart}</span>
      <button
        className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        onClick={() => dispatch(addItem(item))}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddItem;
