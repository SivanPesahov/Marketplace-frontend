import React from "react";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function ProductDetailsPage() {
  // const { ProductID } = useParams();
  const PRODUCTS_URL = "http://127.0.0.1:3000/api/product/";
  const [chosenProduct, setChosenProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const nameBar = useRef(null);
  const priceBar = useRef(null);
  const categoryBar = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <ProductDetails
        PRODUCTS_URL={PRODUCTS_URL}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        loading={loading}
        setLoading={setLoading}
        nameBar={nameBar}
        priceBar={priceBar}
        categoryBar={categoryBar}
        navigate={navigate}
      ></ProductDetails>
    </>
  );
}

export default ProductDetailsPage;
