import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { TopNavLink } from "./utils/TopNavLink";

function App() {

  return (
    <>
    
      <nav>
      <TopNavLink href = {"/"}>Home</TopNavLink>
      <TopNavLink href = {"/Products/List"}>Catalog</TopNavLink>
      <TopNavLink href = {"/Create"}>Create</TopNavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products"  >
          <Route path="List" element={<ProductCatalogPage />} />
          <Route path=":ProductID" element={<ProductDetailsPage />} />
        </Route>
        <Route path="Create" element={<CreateProductPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>


      
    </>
  )
}

export default App
