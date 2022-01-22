import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Loader from "../components/Loader";

function BaseLayout({ children }) {
  return (
    <div className="animate-entry bg-gradient-to-br from-slate-800 to-gray-900 text-white overflow-auto h-screen w-full">
      <Loader />
      {children}
    </div>
  );
}

export default Object.assign(BaseLayout, {
  Navbar,
  Footer,
  Container,
});
