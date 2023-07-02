import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Product from "../IndexPage/Product";
import ProductDetail from "../Details/ProductDetail";

const Cart = () => {
  const {
    products: Products,
    total,
    items,
  } = useSelector((store) => store.product);

  const cartItems = Products.filter((item) => item.inCart === true);
  return (
    <div>
      {cartItems.length == 0 ? (
        <div className="align-middle">
          <h1 className="text-stone-900 text-5xl font-extralight m-9 text-center ">
            Your Cart is Empty..!!
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-9">
          <div>
            <h1 className="text-stone-900 text-5xl font-extralight m-9 text-center ">
              Your Cart{" "}
            </h1>

            {cartItems.map((Item) => {
              return (
                <div key={Item.id}>
                  <ProductDetail {...Item} />
                </div>
              );
            })}
          </div>
          <div className="border pl-32 pt-40 text-stone-900 text-5xl font-extralight text-center capitalize ">
            <h1 className="mb-5">Items:{items}</h1>
            <h1>total:${total}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
