import React from "react";
import { useNavigate } from "react-router-dom";
import { inform, AddtoCart, removeFromCart } from "../../productSlice";
import { useDispatch } from "react-redux";

function Product({
  id,
  title,
  img,
  company,
  price,
  info,
  inCart,
  count,
  total,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoBtn = () => {
    dispatch(inform(id));
    navigate(`/details/${id}`);
  };

  return (
    <div className="border pl-8 mb-3 pb-3">
      <h1 className="font-bold align-middle pb-2 pt-2">{title}</h1>
      <img src={img} onClick={infoBtn} />
      <h3 className="font-bold">{company}</h3>
      <div>{info}</div>
      <div className="pt-2">
        <strong className="mr-96 align-middle"> $:{price}</strong>
        <button
          className=" align-middle ml-16 capitalize rounded-lg w-32 bg-violet-950 hover:bg-white text-white hover:text-black"
          disabled={inCart}
          onClick={() => {
            dispatch(inCart ? removeFromCart(id) : AddtoCart(id));
          }}
        >
          {inCart ? "In Cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
