import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/auth/register/register";
import Login from "../pages/auth/login/login";
import DashboardLayout from "../pages/dashboard/layout";
import ProfilePage from "../pages/dashboard/profile/profile.page";

const Routering = () => {
  const userRole = "buyer";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Ruta del dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <DashboardLayout userRole={userRole} children={<Outlet />} />
            }
          >
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routering;
