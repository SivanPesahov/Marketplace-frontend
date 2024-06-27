import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { TopNavLink } from "../utils/TopNavLink";
import { InputBar } from "../utils/InputBar";
import Select from "../utils/Select";
import { ProductCard } from "../utils/ProductCard";
// import { pic } from "../Pictures/pic.png";

function Catalog(props) {
  const {
    PRODUCTS_URL,
    products,
    SetProducts,
    pagination,
    setPagination,
    nameRef,
    minRef,
    maxRef,
    categoriesRef,
  } = props;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchProducts(1);
  }, [location.pathname, searchParams]);

  const fetchProducts = async (page) => {
    let minPrice = searchParams.get("minPrice");
    if (minPrice === "") searchParams.delete("minPrice");
    setSearchParams(searchParams);

    let maxPrice = searchParams.get("maxPrice");
    if (maxPrice === "") searchParams.delete("maxPrice");
    setSearchParams(searchParams);

    const options = {
      params: {
        name: searchParams.get("name"),
        minPrice: minPrice,
        maxPrice: maxPrice,
        categories: searchParams.get("categories"),
        page: page,
        limit: searchParams.get("skip"),
      },
    };

    try {
      const { data } = await axios.get(PRODUCTS_URL, options);
      SetProducts(data.products);
      setPagination(data.pagination);
    } catch (err) {
      console.log(err);
    }
  };

  function handelFillterChange(ev) {
    const value = ev.target.value;
    searchParams.set(ev.target.name, value);
    setSearchParams(searchParams);
  }

  const handlePageChange = (ev) => {
    searchParams.set("skip", ev.target.value);
    setSearchParams(searchParams);
  };

  function returnCategories(product) {
    let str = "";
    for (let i = 0; i < product.categories.length; i++) {
      str += product.categories[i];
      if (i !== product.categories.length - 1) {
        str += " , ";
      }
    }
    return str;
  }

  return (
    <>
      <div>
        <div className="flex justify-between">
          <InputBar
            ref={nameRef}
            onChange={handelFillterChange}
            name="name"
            placeholder="Enter name"
            defaultValue={searchParams.get("name")}
          ></InputBar>

          <InputBar
            ref={minRef}
            onChange={handelFillterChange}
            name="minPrice"
            placeholder="Enter minimum cost"
            defaultValue={searchParams.get("minPrice")}
          ></InputBar>

          <InputBar
            ref={maxRef}
            onChange={handelFillterChange}
            name="maxPrice"
            placeholder="Enter Maximum cost"
            defaultValue={searchParams.get("maxPrice")}
          ></InputBar>

          <InputBar
            ref={categoriesRef}
            onChange={handelFillterChange}
            name="categories"
            placeholder="Enter categories"
            defaultValue={searchParams.get("categories")}
          ></InputBar>
        </div>
        <div className="flex justify-center">
          <Select
            onChange={handlePageChange}
            value={searchParams.get("skip") || ""}
          >
            <option value="" disabled>
              Select page layout
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>
        </div>
      </div>

      <ul className="grid grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product._id} className="product-item">
              <TopNavLink href={"/Products/" + product._id}>
                <ProductCard
                  // img={pic}
                  name={product.name}
                  price={product.price}
                  categories={returnCategories(product)}
                  quantity={product.quantity}
                />
              </TopNavLink>
            </li>
          );
        })}
      </ul>
      <div className="pagination-controls">
        <button
          onClick={() => fetchProducts(pagination.currentPage - 1)}
          disabled={pagination.currentPage <= 1}
          className={`bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none`}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {pagination.currentPage} of {pagination.totalPages}{" "}
        </span>
        <button
          onClick={() => fetchProducts(pagination.currentPage + 1)}
          disabled={pagination.currentPage >= pagination.totalPages}
          className={`bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Catalog;
