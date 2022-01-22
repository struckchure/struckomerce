import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Error404 from "../pages/error/Error404";
import Samples from "../pages/Samples";

// home page
import Home from "../pages/Home";

// authentication pages
import Login from "../pages/accounts/auth/Login";
import Register from "../pages/accounts/auth/Register";

// dashboard
import Dashboard from "../pages/accounts/Dashboard";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth */}
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="dashboard" element={<Outlet />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* errors */}

        <Route path="*" element={<Error404 />} />
        <Route path="samples" element={<Samples />} />
      </Routes>
    </BrowserRouter>
  );
};
