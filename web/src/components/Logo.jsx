import React from "react";
import { Link } from "react-router-dom";

import logo_img from "../assets/img/logo.png";

export default function Logo(
  {
    showText = true,
    color = "text-white",
    brand_name = "Code With Struckchure",
    imageProps,
  },
  props
) {
  return (
    <div className="grid-center gap-2" {...props}>
      <Link className={`hover:text-current ${color}`} to={{ pathname: "/" }}>
        <img
          src={logo_img}
          alt="CWS logo"
          className={`object-fit w-[5rem] h-auto`}
          {...imageProps}
        />
      </Link>
      {showText && <span className="mx-2 font-mono">{brand_name}</span>}
    </div>
  );
}
