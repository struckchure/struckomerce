import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserProfile } from "../store/actions/accounts";
import Logo from "./Logo";

function Navbar({ show_search_bar = true, user, getUserProfile }) {
  let is_authenticated = user ? true : false;

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <nav className="top-0 z-10 border-b-[1px] border-solid border-gray-700 py-2 px-4 sm:sticky">
      <div className="flex flex-col items-center justify-between gap-2 sm:md:flex-row">
        <ul>
          <li className="flex items-center justify-between gap-2">
            <Logo
              showText={false}
              imageProps={{ className: "object-fit w-[2rem] h-auto" }}
            />
            <span className="font-mono">Struckomerce</span>
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
              <button className="rounded-l-none border-l-0 px-2">
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
                <span className="absolute -top-1 h-5 w-5 rounded-full bg-white text-center text-sm text-gray-800">
                  3
                </span>
              </button>
            </Link>
          </li>

          {is_authenticated ? (
            <li className="mx-2">
              <button className="p-2">
                <i className="icon user"></i>
              </button>
            </li>
          ) : (
            <li className="mx-2">
              <Link
                to={{
                  pathname: "/login",
                }}
              >
                <button className="">Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.accounts.user,
});
const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
