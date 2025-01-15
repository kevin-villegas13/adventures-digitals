import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ProductDetailPage from "./page/product-detail-page";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import SettingPage from "./page/dashboard/settings/setting";
import DashboardLayout from "./layouts/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="settings" element={<SettingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
