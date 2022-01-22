import React from "react";
import BaseLayout from "../layouts/BaseLayout";

export default function Samples() {
  return (
    <BaseLayout>
      <div className="flex gap-2 w-[fit-content] flex-wrap">
        <button>Button</button>

        <button className="icon left bg-gray-700 hover:bg-gray-800">
          <span className="px-2 text-center">Github</span>
          <i className="icon github bg-slate-800"></i>
        </button>

        <button className="icon left">
          <span className="px-2 text-center">Bit Bucket</span>
          <i className="icon bitbucket bg-blue-800"></i>
        </button>

        <button className="icon left">
          <span className="px-2 text-center">Twitter</span>
          <i className="icon twitter bg-blue-800"></i>
        </button>

        <button className="icon left right">
          <i className="icon arrow left bg-blue-800"></i>
          <i className="icon circle notched animate-spin"></i>
          <i className="icon arrow right bg-blue-800"></i>
        </button>

        <div className="flex">
          <button className="icon rounded-r-none">
            <i className="icon fast backward"></i>
          </button>

          <button className="p-0 rounded-none px-2">
            <i className="icon play"></i>
          </button>

          <button className="p-0 rounded-none px-2">
            <i className="icon pause"></i>
          </button>

          <button className="icon rounded-l-none">
            <i className="icon fast forward"></i>
          </button>
        </div>
      </div>

      <div>
        <a href="#">Link</a>
      </div>

      <div className="form-group">
        <label htmlFor="">Label</label>
        <input type="text" placeholder="Input" />
      </div>
    </BaseLayout>
  );
}
