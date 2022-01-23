import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ show_search_bar = true }) {
  return (
    <nav className="border-gray-700 border-solid border-b-[1px] py-2 px-4 sm:sticky top-0 z-10">
      <div className="flex sm:md:flex-row flex-col gap-2 justify-between items-center">
        <ul>
          <li className="flex justify-between items-center gap-2">
            <Logo
              showText={false}
              imageProps={{ className: "object-fit w-[2rem] h-auto" }}
            />
            <span className="font-mono">Code With Struckchure</span>
          </li>
        </ul>

        {/* search bar */}

        {show_search_bar && (
          <ul>
            <li className="flex gap-0">
              <input
                type="text"
                className="rounded-r-none"
                placeholder="mechanical keyboards"
              />
              <button className="px-2 border-l-0 rounded-l-none">
                <i className="icon arrow right"></i>
              </button>
            </li>
          </ul>
        )}

        <ul className="flex justify-around gap-0">
          <li>
            <Link to={{ pathname: "/dashboard/favorites" }}>
              <button className="icon rounded-r-none pr-1">
                <i className="icon heart"></i>
              </button>
            </Link>
          </li>

          <li>
            <Link to={{ pathname: "/dashboard/cart" }}>
              <button className="icon relative rounded-l-none pl-2">
                <i className="icon cart"></i>
                <span className="absolute -top-1 bg-white w-5 h-5 rounded-full text-sm text-center text-gray-800">
                  3
                </span>
              </button>
            </Link>
          </li>

          <li className="mx-2">
            <Link
              to={{
                pathname: "/login",
              }}
            >
              <button className="">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
