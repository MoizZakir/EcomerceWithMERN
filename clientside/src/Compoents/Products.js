import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { products } from './dummydata'
import Product from './Product'
import axios from 'axios'
const Container=styled.div`
padding:10px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async()=>{
      try{

        const res = await axios.get("http://localhost:3000/products");
        console.log(axios);

      }catch(err){

      }
    };
    getProducts();
  }, [cat])

  return (
    <Container>
        {products.map(e=>(
            <Product items={e} key={e.id}/>

        ))}
    </Container>
  )
}

export default Products