import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { AddtoCart, emptyDetails } from "../../productSlice";

const ProductInfo = () => {
  const detailProduct = useSelector((store) => store.product.detailProduct);
  const { id, title, img, company, price, info, inCart } = detailProduct;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addingToCart = () => {
    dispatch(AddtoCart(id));
  };

  const navigateToHome = () => {
    dispatch(emptyDetails());
    navigate("/");
  };

  return (
    <div>
      <strong>Details</strong>
      <h1>{title}</h1>
      <img src={img} />
      <div>{info}</div>
      <h2>{company}</h2>
      <h3>$:{price}</h3>
      <button
        className="rounded-lg bg-fuchsia-500 hover:bg-white text-white hover:text-black"
        onClick={() => addingToCart()}
      >
        {inCart ? "In Cart" : "add to cart"}
      </button>
      <button
        className="rounded-lg bg-fuchsia-500 hover:bg-white text-white hover:text-black"
        onClick={() => navigateToHome()}
      >
        back to products
      </button>
    </div>
  );
};

export default ProductInfo;
