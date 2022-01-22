import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
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

        <ul className="flex justify-around gap-2">
          <li>
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
