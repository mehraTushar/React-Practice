import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Features/Cart/CartSlice";
const AddItem = ({ className, item, cart }) => {
  const dispatch = useDispatch();
  //const [ItemCount, SetItemCount] = useState(1);
  return (
    <div className={className}>
      <button>
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => {
            dispatch(removeItem(item));
          }}
        />
      </button>
      <span>{cart}</span>
      <button>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => {
            dispatch(addItem(item));
          }}
        />
      </button>
    </div>
  );
};
export default AddItem;
