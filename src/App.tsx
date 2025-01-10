import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ProductDetailPage from "./page/product-detail-page";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
