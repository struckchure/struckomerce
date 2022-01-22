import React from "react";
import { Link } from "react-router-dom";

export default function Logo(
  { size = "small", animate = true, showText = true, color = "text-white" },
  props
) {
  return (
    <Link className={`hover:text-current ${color}`} to={{ pathname: "/" }}>
      <div {...props}>
        <i
          className={`icon shop ${size} ${animate ? "animate-bounce" : ""}`}
        ></i>
        {showText && <span className="mx-2">E-Commerce</span>}
      </div>
    </Link>
  );
}
