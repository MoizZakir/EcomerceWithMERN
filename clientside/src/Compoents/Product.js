import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import styled from 'styled-components'
import img from '../img.png';
const Info=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:gray;

opacity:0;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.3s ease;
z-index:4

`
const Container=styled.div`
flex:1;
margin:20px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;


&:hover ${Info}{
    opacity:0.3;
}
`
const Circle=styled.img`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
border:0.1px solid white;


`


const Icon=styled.div` width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:20px;
transition:all 0.5s ease;
&:hover{
    background-color:lightGray;
    transform:scale(1.4);
}`
const Image=styled.img`
height:50%;
z-index:1


`
const Product = ({items}) => {
  return (
    <Container>
        
        <Circle/>
        <Image src={img} />
        <Info>
            <Icon>
            <FiShoppingCart />
            </Icon>
            <Icon>
            <FaRegHeart />
            </Icon>
            <Icon>
            <IoIosSearch />

            </Icon>
        </Info>
    </Container>
  )
}

export default Product