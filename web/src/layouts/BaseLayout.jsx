import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

function BaseLayout({ children }) {
  return (
    <main>
      <Loader />
      <Alert />

      <div className="animate-entry h-screen w-full overflow-auto bg-gradient-to-br from-slate-800 to-gray-900 text-white">
        {children}
      </div>
    </main>
  );
}

export default Object.assign(BaseLayout, {
  Navbar,
  Footer,
  Container,
});
