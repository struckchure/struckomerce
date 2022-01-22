import React from "react";

export default function Container({ children }, props) {
  return (
    <div className="p-2 mx-auto container" {...props}>
      {children}
    </div>
  );
}
