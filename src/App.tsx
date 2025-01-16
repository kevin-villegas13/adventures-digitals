import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ProductDetailPage from "./page/product-detail-page";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import SettingPage from "./page/dashboard/settings/setting";
import DashboardLayout from "./layouts/dashboard";
import ProfilePage from "./page/dashboard/profile/profile";
import ProductPage from "./page/dashboard/seller/product/product";
import SalesPage from "./page/dashboard/seller/sales/sales";
import OrderPage from "./page/dashboard/buyer/order/order";
import PurchaseHistoryPage from "./page/dashboard/buyer/purchases/purchases";
import PaymentMethdPage from "./page/dashboard/buyer/payment-method/payment-methods";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        {/*Settings profile  */}
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingPage />} />

        {/*Role Seller */}
        <Route path="products" element={<ProductPage />} />
        <Route path="sales" element={<SalesPage />} />

        {/*Role Buyer */}
        <Route path="orders" element={<OrderPage />} />
        <Route path="purchases" element={<PurchaseHistoryPage />} />
        <Route path="payment-methods" element={<PaymentMethdPage />} />
      </Route>
    </Routes>
  );
}

export default App;
