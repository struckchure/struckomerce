import React from "react";

import cart_item_img from "../../assets/img/prod-2.jpg";

function CartItem() {
  return (
    <div className="flex flex-col sm:md:flex-row justify-between gap-2 bg-gray-800 p-2 rounded-lg shadow-lg">
      <div className="flex flex-row items-center gap-3">
        <img
          src={cart_item_img}
          className="object-fit w-[5rem] h-auto rounded-lg"
          alt=""
        />

        <div>
          <label htmlFor="" className="font-bold">
            Google Pixel 4 XL
          </label>
          <small className="block text-gray-500">64 Go, Just Black</small>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-x-4">
        <div className="flex flex-row gap-2 items-center">
          <button className="rounded-md grid-center p-[0.5rem] pr-[0.3rem]">
            <i className="icon plus tiny"></i>
          </button>

          <input
            type="number"
            min={1}
            minLength={1}
            defaultValue={1}
            className="rounded-md w-20"
          />

          <button className="rounded-md grid-center p-[0.5rem] pr-[0.3rem]">
            <i className="icon minus tiny"></i>
          </button>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span>
            <small className="mx-6">qty</small>
            <p className="font-bold">$800.00</p>
          </span>

          <span>
            <small className="mx-6">x1</small>
            <p className="font-bold">$800.00</p>
          </span>

          <button className="rounded-md grid-center p-[0.5rem] pr-[0.3rem]">
            <i className="icon trash small"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
