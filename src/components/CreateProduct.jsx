import { useRef } from "react";
import axios from "axios";
import { InputBar } from "../utils/InputBar";
import { Button } from "../utils/SubmitButton";

function CreateProduct(props) {
  const nameBar = useRef(null);
  const priceBar = useRef(null);
  const categoryBar = useRef(null);
  const quantityBar = useRef(null);

  const { PRODUCTS_URL } = props;

  async function createProduct(ev) {
    ev.preventDefault();
    if (
      nameBar.current.value !== "" &&
      priceBar.current.value !== "" &&
      quantityBar.current.value !== "" &&
      categoryBar.current.value !== "" &&
      !isNaN(priceBar.current.value) &&
      !isNaN(quantityBar.current.value)
    ) {
      try {
        const { data } = await axios.post(PRODUCTS_URL + "/create", {
          name: nameBar.current.value,
          price: priceBar.current.value,
          quantity: quantityBar.current.value,
          categories: categoryBar.current.value
            .split(/\s+/)
            .filter((word) => word.length > 0),
        });
        nameBar.current.value = "";
        priceBar.current.value = "";
        categoryBar.current.value = "";
        quantityBar.current.value = "";
        alert("Product added!");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please insert correct values!");
    }
  }

  return (
    <>
      <form onSubmit={createProduct} className="">
        <div className="mx-32 mt-20 bg-gray-700 border rounded flex flex-col items-center">
          <div className="w-5/6 mt-2 ">
            <InputBar ref={nameBar} placeholder="Enter name"></InputBar>

            <InputBar ref={priceBar} placeholder="Enter price"></InputBar>

            <InputBar ref={quantityBar} placeholder="Enter quantity"></InputBar>

            <InputBar ref={categoryBar} placeholder="Enter catagory"></InputBar>
          </div>
          <div className="flex justify-center mb-3">
            <Button>Create product</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateProduct;
