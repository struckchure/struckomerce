import React from "react";

function BaseLayout({ children }) {
  return (
    <div className="animate-entry p-4 bg-gradient-to-br from-slate-800 to-gray-900 text-white h-screen w-full">
      {children}
    </div>
  );
}

export default BaseLayout;
