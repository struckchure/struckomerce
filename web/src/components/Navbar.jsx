import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserProfile } from "../store/actions/accounts";
import Logo from "./Logo";

function Navbar({ show_search_bar = true, user, getUserProfile }) {
  let is_authenticated = user ? true : false;

  const [sidebar_is_open, set_sidebar_is_open] = useState(false);

  useEffect(() => {
    // document.addEventListener("click", ({ target }) => {
    //   const elem = document.querySelector(".sidebar");
    //   if (target != elem) {
    //     set_sidebar_is_open(false);
    //   }
    // });
    getUserProfile();
  }, [sidebar_is_open]);

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
              <button
                className="p-2"
                onClick={() => {
                  set_sidebar_is_open(!sidebar_is_open);
                }}
              >
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

      <div
        className={`fixed top-0 left-0 z-[-1] h-screen w-full transform bg-[rgba(0,0,0,0.5)] blur-3xl ${
          sidebar_is_open ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <section
        className={`fixed right-20 top-24 z-20 ${
          sidebar_is_open ? "scale-100" : "scale-0"
        } sidebar transform`}
      >
        <ul className="flex h-fit flex-col gap-4">
          <li>
            <Link
              className="rounded-full bg-gray-700 p-2 text-white hover:no-underline"
              to="/dashboard"
            >
              <i className="icon home"></i>
            </Link>
          </li>

          <li>
            <Link
              className="rounded-full bg-gray-700 p-2 text-white hover:no-underline"
              to="/logout"
            >
              <i className="icon logout"></i>
            </Link>
          </li>
        </ul>
      </section>
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
