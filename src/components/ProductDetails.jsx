import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { getProducts } from "../utils/axiosGetFunction";
import { ProductCard } from "../utils/ProductCard";
import { InputBar } from "../utils/InputBar";

function ProductDetails(props) {
  const {
    PRODUCTS_URL,
    chosenProduct,
    setChosenProduct,
    loading,
    setLoading,
    nameBar,
    priceBar,
    categoryBar,
    navigate,
  } = props;

  const { ProductID } = useParams();

  useEffect(() => {
    getProducts(setChosenProduct, PRODUCTS_URL + ProductID);
    setLoading(false);
  }, [location.pathname]);

  async function editProduct(productToChange) {
    const arr = categoryBar.current.value
      .split(/\s+/)
      .filter((word) => word.length > 0);

    try {
      const { data: updatedProduct } = await axios.patch(
        PRODUCTS_URL + "edit/" + productToChange._id,
        {
          name: nameBar.current.value,
          price: priceBar.current.value,
          categories: arr,
        }
      );
      setChosenProduct(updatedProduct);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(PRODUCTS_URL + productId);
      goToList();
    } catch (err) {
      console.log(err);
    }
  }

  const goToList = () => {
    navigate("/Products/List");
  };

  if (loading) return <div>Loading...</div>;
  if (!chosenProduct) return <div>No product found</div>;

  return (
    <>
      <ProductCard
        name={chosenProduct.name}
        price={chosenProduct.price}
        category={chosenProduct.category}
        categories={chosenProduct.categories}
        quantity={chosenProduct.quantity}
      />
      <div className="px-6">
        <InputBar ref={nameBar} placeholder="Enter name" />

        <InputBar ref={priceBar} placeholder="Enter product price" />

        <InputBar ref={categoryBar} placeholder="Enter product catagory" />
      </div>
      <div className="flex px-6">
        <button
          onClick={() => {
            editProduct(chosenProduct);
          }}
          className={`bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-4`}
        >
          Edit Post
        </button>
        <br></br>
        <button
          onClick={() => {
            deleteProduct(chosenProduct._id);
          }}
          className={`bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-4`}
        >
          Remove Post
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
