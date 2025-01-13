import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ProductDetailPage from "./page/product-detail-page";
import Login from "./page/auth/login";
import Register from "./page/auth/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
