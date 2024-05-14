import React from 'react'
import styled from 'styled-components'
import { products } from './dummydata'
import Product from './Product'
const Container=styled.div`
padding:10px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = () => {
  return (
    <Container>
        {products.map(e=>(
            <Product items={e} key={e.id}/>

        ))}
    </Container>
  )
}

export default Products