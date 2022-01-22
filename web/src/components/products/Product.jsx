import React from "react";
import { useState } from "react";

function Product({
  image,
  title,
  price,
  info,
  sold,
  ratings,
  orientation = "flex-col",
}) {
  const [hovered, set_hover] = useState(false);

  return (
    <div
      className={`bg-gray-800 rounded-lg w-fit shadow-lg flex ${orientation}`}
      onMouseEnter={() => {
        set_hover(true);
      }}
      onMouseLeave={() => {
        set_hover(false);
      }}
    >
      <div className="rounded-[inherit] overflow-hidden relative">
        <img
          className={`object-fit ${
            orientation == "flex-row"
              ? "w-[15rem] sm:w-[7.5rem] mx-2"
              : "w-[20rem] sm:w-[15rem]"
          } h-auto rounded-lg transform hover:scale-125`}
          src={image}
          alt=""
        />

        <div
          className={`flex flex-col gap-2 absolute top-[5%] w-fit h-fit ${
            hovered ? "left-[5%]" : "left-[5%] sm:md:left-[-35%]"
          }`}
        >
          <button className="shadow-lg p-1">
            <i className="icon heart"></i>
          </button>

          <button className="shadow-lg p-1">
            <i className="icon cart plus"></i>
          </button>
        </div>
      </div>

      <div
        className={`p-4 ${
          orientation == "flex-row" ? "flex flex-col justify-between" : ""
        }`}
      >
        <label htmlFor="" className="text-2xl font-bold">
          {title}
        </label>
        <span className="block text-gray-400">{sold} sold</span>
        <small>{info}</small>

        <div className="flex sm:flex-row gap-x-2 flex-col justify-between pt-4 px-2">
          <label htmlFor="">{price}</label>
          <div className="text-sm">
            <i className="icon star"></i>
            <i className="icon star"></i>
            <i className="icon star"></i>
            <i className="icon star"></i>
            <i className="icon star"></i>
            <span className="text-gray-400">({ratings})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
