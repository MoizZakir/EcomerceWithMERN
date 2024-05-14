import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
flex:1;
 margin:3px;
 position:relative;
 height:70vh
`
const Image =styled.img
`
width:100%;
height:100%;
object-fit:cover;
`
const Info=styled.p`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title=styled.h1`
color:white;
margin-botom:20px;
`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-size;600
`

const CatagoriesItems = ({items}) => {
  return (
    <Container>
        <Image src={items.img}/>
        <Info>
            <Title>
            {items.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CatagoriesItems