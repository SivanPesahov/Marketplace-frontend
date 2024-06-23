import { useRef } from 'react'
import axios from 'axios'

function CreateProduct(){

  const PRODUCTS_URL = 'http://127.0.0.1:3000/api/product'
  const nameBar = useRef(null)
  const priceBar = useRef(null)
  const categoryBar = useRef(null)

  function makeId() {
    while (true) {
      const newId = Math.random().toString(36).substr(2, 9);
      const tempProducts = products;
      const productIndex = tempProducts.findIndex((product) => {
        return product._id === newId;
      });
      if (productIndex === -1) {
        return newId;
        }
    }
  }

  async function createProduct(ev){
    ev.preventDefault();
    try{
        const { data } = await axios.post(PRODUCTS_URL, {
            id: makeId(),
            name: nameBar.current.value,
            price: priceBar.current.value,
            category: categoryBar.current.value
            })
            nameBar.current.value = ''
            priceBar.current.value = ''
            categoryBar.current.value = ''
    }catch (err) {
      console.log(err);
    }
  }

    return (
        <>
            <div>CreateProductPage</div>
            <form onSubmit={createProduct}>
                <input type="text" ref={nameBar}/>
                <input type="text" ref={priceBar}/>
                <input type="text" ref={categoryBar}/>
                <button>Add Product</button>
            </form>
        </>
    )
}

export default CreateProduct;