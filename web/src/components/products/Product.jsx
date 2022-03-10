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
      className={`flex w-fit rounded-lg bg-gray-800 shadow-lg ${orientation}`}
      onMouseEnter={() => {
        set_hover(true);
      }}
      onMouseLeave={() => {
        set_hover(false);
      }}
    >
      <div className="relative overflow-hidden rounded-[inherit]">
        <img
          className={`object-fit ${
            orientation == "flex-row"
              ? "mx-2 w-[15rem] sm:w-[7.5rem]"
              : "w-[20rem] sm:w-[15rem]"
          } h-auto transform rounded-lg hover:scale-125 hover:blur-[2px]`}
          src={image}
          alt={`image of ${title}`}
        />

        <div
          className={`absolute top-[5%] flex h-fit w-fit flex-col gap-2 ${
            hovered ? "left-[5%]" : "left-[5%] sm:md:left-[-35%]"
          }`}
        >
          <button className="h-10 w-10 px-[0.2rem] shadow-lg">
            <span>
              <i className="icon heart outline outline-0"></i>
            </span>
          </button>

          <button className="h-10 w-10 px-[0.2rem] shadow-lg">
            <span>
              <i className="icon cart plus"></i>
            </span>
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

        <div className="flex flex-col justify-between gap-x-2 px-2 pt-4 sm:flex-row">
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
