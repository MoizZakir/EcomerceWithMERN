import React from 'react'
import Nabar from '../Compoents/Nabar'
import styled from 'styled-components'
import Announecment from '../Compoents/Announecment'
import Footer from '../Compoents/Footer'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
const Container=styled.div``

const Wrapper=styled.div`
padding:20px;

`
const Title=styled.h1`
font-weight:300;
text-align:center;
padding:20px;

`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;


`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type== 'filled'& 'none'};
background-color:${(props)=>props.type== 'filled' ? 'black': 'transparent'};
color:${(props)=>props.type== 'filled'& 'white'};

`

const TopTexts=styled.div`
`
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px
`
const Bottom=styled.div`
padding:20px;
display:flex;
justify-context:space-between;


`
const Info=styled.div`
flex:3
`
const Summary=styled.div`
flex:1
`
const Product=styled.div`
display:flex;
justify-content:space-between;

`
const ProductDetail=styled.div`
flex:2;
display:flex;


`
const Image=styled.img`
width:200px;

`
const Detail=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
gap:10px
`
const ProductColor=styled.div`

width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color}
`
const ProductName=styled.span`
`
const ProductId=styled.span`
`
const ProductSize=styled.span`
`
const PriceDetail=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

flex:2
`
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;`
const ProductAmmount=styled.div`
font-size:24px;
margin:5px;
`
const ProductPrice=styled.div`
font-size:30px;
font-weight:200;
`
const Hr=styled.hr`
background-color:#eee;
border:none`

const Cart = () => {
  return (
    <Container>
        <Nabar/>
        <Announecment/>
        <Wrapper>
            <Title>Your Bag</Title>
        <Top>
        <TopButton>CONTINUE SHOPPING </TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whitelist(0)</TopText>
        </TopTexts>
        <TopButton type='filled'>CHECK OUT NOW </TopButton>
        </Top>
        <Bottom>
<Info>

<Product>
    <ProductDetail>
        <Image/>
        <Detail>
            <ProductName><b>Product: </b>Desie thunder</ProductName>
            <ProductId><b>Id: </b>1221213312</ProductId>
            <ProductColor color='black' />
                <ProductSize><b>Size: </b>Small</ProductSize>
        </Detail>
    </ProductDetail>
    <PriceDetail>
        <ProductAmountContainer>
        <IoIosRemove />
            <ProductAmmount>3</ProductAmmount>
            <IoIosAdd />
        </ProductAmountContainer>
        <ProductPrice>200$</ProductPrice>
    </PriceDetail>
</Product>
<Hr/>
<Product>
    <ProductDetail>
        <Image/>
        <Detail>
            <ProductName><b>Product: </b>Desie thunder</ProductName>
            <ProductId><b>Id: </b>1221213312</ProductId>
            <ProductColor color='black' />
                <ProductSize><b>Size: </b>Small</ProductSize>
        </Detail>
    </ProductDetail>
    <PriceDetail>
        <ProductAmountContainer>
        <IoIosRemove />
            <ProductAmmount>3</ProductAmmount>
            <IoIosAdd />
        </ProductAmountContainer>
        <ProductPrice>200$</ProductPrice>
    </PriceDetail>
</Product>

</Info>
<Summary>summary</Summary>

        </Bottom>

        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart