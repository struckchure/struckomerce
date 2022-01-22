import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Link to={{ pathname: "/dashboard" }}>
        <button>Dashboard</button>
      </Link>
    </BaseLayout>
  );
}
