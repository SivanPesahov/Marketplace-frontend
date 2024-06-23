import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";

function ProductDetails(){

  const { ProductID } = useParams();
  const PRODUCTS_URL = 'http://127.0.0.1:3000/api/product/'
  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const nameBar = useRef(null)
  const priceBar = useRef(null)
  const categoryBar = useRef(null)
  const navigate = useNavigate();

    useEffect(() => {async function getProducts(){
        try{
          const { data } = await axios.get(PRODUCTS_URL)
          SetProducts(data)
        } catch (err){
          console.log(err);
        } finally{
            setLoading(false)
        }
      }
      getProducts()
      }, [location.pathname])

    const chosenProduct = useMemo(() => {return products.filter((product) => {
      return product._id === ProductID;
    });
    },[products, ProductID]);

    async function editProduct(productToChange){
        try{
            const {data : updatedProduct} = await axios.patch(PRODUCTS_URL + 'edit/'+ productToChange._id, {name: nameBar.current.value, price: priceBar.current.value, category: categoryBar.current.value})
            SetProducts((prevProducts) => {
                return prevProducts.map((product) => {
                    if(product._id === productToChange._id){
                        return updatedProduct
                    }
                    return product
                })
            })
        }catch (err){
            console.log(err) 
        }
    }  
    
    const goToList = () => {
        navigate('/Products/List');
    };

    async function deleteProduct(productId){
        try{
            await axios.delete(PRODUCTS_URL + productId)
            SetProducts((prevProducts) => {
                return prevProducts.filter((product) => product._id !== productId);})
            goToList()
        } catch(err){
            console.log(err)     
        }
    }

    if (loading) return <div>Loading...</div>;
    if (!chosenProduct) return <div>No product found</div>;
    
    
    return(
        <>
            <div>ProductDetailsPage</div>
            <div><p>{chosenProduct[0].name}</p></div>
            <div><p>{chosenProduct[0].price}</p></div>
            <div><p>{chosenProduct[0].category}</p></div>
            <br></br>
            <input type="text" ref={nameBar} placeholder="Enter name"/>
            <br></br>
            <input type="text" ref={priceBar} placeholder="Enter product price"/>
            <br></br>
            <input type="text" ref={categoryBar} placeholder="Enter product catagory"/>
            <button onClick={() => {editProduct(chosenProduct[0])}}>Edit Post</button>
            <br></br>
            <button onClick={() => {deleteProduct(chosenProduct[0]._id)}}>Remove Post</button>
        </>
    )
}

export default ProductDetails;