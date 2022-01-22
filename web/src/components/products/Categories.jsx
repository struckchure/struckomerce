import React from "react";
import { Link } from "react-router-dom";

function Categories({ category_list }) {
  return (
    <ul className="flex flex-row flex-wrap gap-1 p-4">
      {category_list &&
        category_list.map((category, index) => (
          <Link key={index} to={category.link} className="text-gray-100">
            <button>{category.text}</button>
          </Link>
        ))}
    </ul>
  );
}

export default Categories;
