import React from "react";
import Logo from "../components/Logo";

export default function ErrorLayout({ children }) {
  return (
    <div className="animate-entry grid-center h-screen bg-gradient-to-br from-slate-800 to-gray-900">
      <Logo showText={false} size="huge" />
      {children}
    </div>
  );
}
