import { useNavigate } from "react-router-dom";
import {
  inform,
  AddtoCart,
  removeFromCart,
  increment,
  decrement,
} from "../../productSlice";
import { useDispatch } from "react-redux";

import React from "react";

const ProductDetail = ({
  id,
  title,
  img,
  company,
  price,
  info,
  inCart,
  count,
  total,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoBtn = () => {
    dispatch(inform(id));
    navigate(`/details/${id}`);
  };
  return (
    <div className="ml-4">
      <div className="mt-32">
        <h1 className="font-bold text-">{title}</h1>
        <img src={img} onClick={infoBtn} />
        <h3 className="font-bold">{company}</h3>
        <h3>$:{price}</h3>
        <h3 className="text-end">count:${count}</h3>
        <h3 className="text-end">total:${total}</h3>

        <button
          className="rounded-lg w-36 bg-fuchsia-500 hover:bg-white text-black hover:text-black mr-2"
          onClick={() => {
            dispatch(increment(id));
          }}
        >
          increase count
        </button>
        <button
          className="rounded-lg w-36 bg-fuchsia-500 hover:bg-white text-black hover:text-black ml-2"
          onClick={() => {
            dispatch(decrement(id));
          }}
        >
          decrease count
        </button>
        <button
          className="rounded-lg  bg-blue-500 hover:bg-white text-black hover:text-black ml-3"
          onClick={() => {
            dispatch(inCart ? removeFromCart(id) : AddtoCart(id));
          }}
        >
          {inCart ? "Remove From cart" : "add to cart"}
        </button>
        <button
          className="rounded-lg w-36 bg-fuchsia-500 hover:bg-white text-black hover:text-black mr-3"
          onClick={() => navigate("/")}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
