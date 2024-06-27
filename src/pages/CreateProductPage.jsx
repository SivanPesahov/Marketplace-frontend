import CreateProduct from "../components/CreateProduct";

function CreateProductPage() {
  const PRODUCTS_URL = "http://127.0.0.1:3000/api/product";

  return (
    <>
      <CreateProduct PRODUCTS_URL={PRODUCTS_URL}></CreateProduct>
    </>
  );
}

export default CreateProductPage;
