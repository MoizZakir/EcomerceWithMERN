import React from 'react'
import styled from 'styled-components'
import Nabar from '../Compoents/Nabar'
import Announecment from '../Compoents/Announecment'
import NewsLetter from '../Compoents/NewsLetter'
import Footer from '../Compoents/Footer'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { mobile } from './Responsive'
const Container=styled.div`
`
const Wrapper=styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:'column'})}
`
const ImgContainer=styled.div`
flex:1;
`
const Images=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
`
const Title=styled.h1`
font-weight:200
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight:100;
font-size:40px
`

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
${mobile({width:"75%"})}

`
const Filter=styled.div`
display:flex;
align-items:center;

`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;

`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color};
margin:0px 5px;
cursor:pointer;


`
const FilterSize=styled.select`
marginleft:20px;
padding:5px
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({width:"100%"})}

`
const AmountConatiner=styled.div`
display:flex;
align-items:center;
font-weight:500
`


const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`

const Button=styled.button`
margin:5px 0;
padding:15px;
border:1px solid teal ;
background-color:white;
cursor:pointer;
font-weight:500;


&:hover{
    background-color:#f8f4f4
}

`

const Product = () => {
  return (
    <Container>
        <Nabar/>
        <Announecment/>
        <Wrapper>
            <ImgContainer>
            <Images src='https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1974727070.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>jeans</Title>
                <Desc>lcsdcsdcdsc csdcsdcsdcsdcsdcsdcsdcsdcsdcsdc csdcddsc cdscsdcd csdcsdc csdc csdc csdcds csdc csdcsdc
                    csdcsdcsd csdcsdc csdcsdc csdcsdc csdcsdv fvg bbdsvdf v rgedsfd vferf evergferfe vfe
                </Desc>
                <Price>20$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/> 
                        <FilterColor color='black'/> 
                        <FilterColor color='black'/> 
                    </Filter>
                    <Filter>
                        <FilterTitle>Color</FilterTitle></Filter>
                        <FilterSize>
                            <FilterSizeOption>xs</FilterSizeOption>
        <FilterSizeOption>xs</FilterSizeOption>
        <FilterSizeOption>xs</FilterSizeOption>
        <FilterSizeOption>xs</FilterSizeOption>
        <FilterSizeOption>xs</FilterSizeOption>
                        </FilterSize>
                </FilterContainer>
                <AddContainer>
                    <AmountConatiner>
                    <IoIosRemove />
                        <Amount>1$</Amount>
                        <IoIosAdd />
                    </AmountConatiner>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>

        </Wrapper>
        <NewsLetter/>
        <Footer/>   
    </Container>
  )
}

export default Product