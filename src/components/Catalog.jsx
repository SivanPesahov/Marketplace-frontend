import React, { useEffect, useState, useMemo, forwardRef } from "react";
import axios from 'axios';
import { Link, NavLink, Navigate, useNavigate , Route, Routes } from "react-router-dom";
import { TopNavLink } from "../utils/TopNavLink";

function Catalog(){
    
    const PRODUCTS_URL = 'http://127.0.0.1:3000/api/product'
    const [products, SetProducts] = useState([])

    useEffect(() => {async function getProducts(){
        try{
          const { data } = await axios.get(PRODUCTS_URL)
          SetProducts(data)
        } catch (err){
          console.log(err);
        }
      }
      getProducts()
      }, [location.pathname])
    
    return (
        <>
            <ul>
                {products.map((product) => {return (
                        <li key = {product._id}>  
                            <TopNavLink href= { "/Products/" + product._id }>{product.name}</TopNavLink>
                            <br></br>
                            {product.price}
                            <br></br>
                            {product.category}
                        </li>)})}
            </ul>
        
        </>
    )
}

export default Catalog
