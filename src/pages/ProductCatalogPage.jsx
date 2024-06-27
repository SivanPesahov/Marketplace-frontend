import React from "react";
import Catalog from "../components/Catalog";
import { useState, useRef } from "react";

function ProductCatalogPage() {
  const PRODUCTS_URL = "http://127.0.0.1:3000/api/product";
  const [products, SetProducts] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    currentPage: 1,
  });
  const nameRef = useRef(null);
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const categoriesRef = useRef(null);

  return (
    <>
      <Catalog
        PRODUCTS_URL={PRODUCTS_URL}
        products={products}
        SetProducts={SetProducts}
        pagination={pagination}
        setPagination={setPagination}
        nameRef={nameRef}
        minRef={minRef}
        maxRef={maxRef}
        categoriesRef={categoriesRef}
      ></Catalog>
    </>
  );
}

export default ProductCatalogPage;
