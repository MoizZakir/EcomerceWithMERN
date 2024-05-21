import React from 'react'
import styled from 'styled-components'
import Nabar from '../Compoents/Nabar'
import Announecment from '../Compoents/Announecment'
import Products from '../Compoents/Products'
import NewsLetter from '../Compoents/NewsLetter'
import Footer from '../Compoents/Footer'
const Container=styled.div`
`


const Title=styled.h3`margin:20px;`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between`
const Filter=styled.div`
margin:20px;`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select=styled.select`
margin-right:20px;
padding:10px`
const Option=styled.option``

const ProductList = () => {
  return (
    <Container>
        <Nabar/>
        <Announecment/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter</FilterText><Select>
                <Option disabled selected>Color</Option>
                <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>4</Option>
            
            
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>4</Option>
            
            
            </Select></Filter>
            <Filter><FilterText>Filter2</FilterText>
            <Select>
                <Option disabled selected>Price</Option>
                <Option>10$</Option>
            <Option>20$</Option>
            <Option>30$</Option>
            <Option>40$</Option>
            <Option>50$</Option>
            
            
            </Select></Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList