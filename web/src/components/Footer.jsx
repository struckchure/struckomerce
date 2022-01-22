import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-gray-700 border-solid border-t-[1px] py-2 px-4 w-full">
      <div className="grid-center">
        <Logo imageProps={{ className: "object-fit w-[4rem] h-auto" }} />
      </div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-4 p-4">
        <ul>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="grid-center">
        <span className="text-gray-500">CWS | {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
