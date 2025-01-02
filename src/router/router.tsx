import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/auth/register/register";
import Login from "../pages/auth/login/login";

const Routering = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routering;
