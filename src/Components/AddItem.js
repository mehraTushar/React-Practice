import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Features/Cart/CartSlice";
const AddItem = ({ setIsaddActive, className, item }) => {
  const dispatch = useDispatch();
  const [ItemCount, SetItemCount] = useState(1);
  return (
    <div className={className}>
      <button>
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => {
            ItemCount > 1
              ? SetItemCount((cnt) => cnt - 1)
              : setIsaddActive(false);
            dispatch(removeItem(item));
          }}
        />
      </button>
      <span>{ItemCount}</span>
      <button>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => {
            SetItemCount((cnt) => cnt + 1);
            dispatch(addItem(item));
          }}
        />
      </button>
    </div>
  );
};
export default AddItem;
