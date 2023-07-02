import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import Products from "./pages/IndexPage/Products";
import ProductInfo from "./pages/Details/ProductInfo";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Products />} />
        <Route path="details">
          <Route path=":productId" element={<ProductInfo />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
