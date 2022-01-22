import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo";
import BaseLayout from "../BaseLayout";

function AuthLayout({ children }) {
  return (
    <BaseLayout>
      <div className="grid place-items-center place-content-center h-full w-full">
        <div className="py-4">
          <AuthLayout.Logo size={"large"} />
          <hr />
        </div>

        <Outlet />
        {children}
      </div>
    </BaseLayout>
  );
}

export default Object.assign(AuthLayout, { Logo });
