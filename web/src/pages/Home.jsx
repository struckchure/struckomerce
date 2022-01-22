import React from "react";
import Categories from "../components/products/Categories";
import Product from "../components/products/Product";
import BaseLayout from "../layouts/BaseLayout";

import product_image from "../assets/img/prod-1.jpg";
import ProductList from "../components/products/ProductList";

export default function Home() {
  let category_list = [
    {
      text: "All Categories",
      link: "/",
    },
    {
      text: "Phones & Tablets",
      link: "/phones-and-tablets",
    },
    {
      text: "Accessories",
      link: "/accessories",
    },
    {
      text: "Computer",
      link: "/computer",
    },
    {
      text: "Gaming equipments",
      link: "/gaming-equipments",
    },
    {
      text: "TV & Monitor",
      link: "/tv-and-monitor",
    },
    {
      text: "Shoes",
      link: "/shoes",
    },
    {
      text: "Clothes and Cosmetics",
      link: "/clothes-and-cosmetics",
    },
    {
      text: "Furniture",
      link: "/furniture",
    },
    {
      text: "Hand tools",
      link: "/hand-tools",
    },
  ];

  let product_list = [
    {
      image: product_image,
      title: "Hiking Shoe",
      info: "",
      price: "$ 500",
      ratings: 5,
      sold: "10k",
    },
  ];

  for (let index = 0; index < 10; index++) {
    product_list.push(product_list[0]);
  }

  return (
    <BaseLayout>
      {/* navbar */}
      <BaseLayout.Navbar />

      {/* container */}
      <BaseLayout.Container>
        {/* categories */}
        <Categories category_list={category_list} />

        {/* product list */}
        <ProductList>
          {product_list.map((product, index) => (
            <Product {...product} key={index} orientation="flex-col" />
          ))}
        </ProductList>
      </BaseLayout.Container>

      {/* footer */}
      <BaseLayout.Footer />
    </BaseLayout>
  );
}
