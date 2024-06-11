import React from 'react'
import { BsFillSendArrowUpFill } from 'react-icons/bs'
import styled from 'styled-components'
import { mobile } from '../Pages/Responsive'
const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column

`
const Title=styled.h1`
font-size:70px;
${mobile({fontSize:"50px"})}
margin-bottom:20px`
const Description=styled.p`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign:'center'})}`
const InputContainer=styled.div`
width:50%;
${mobile({width:"50%"})}
;
height:40px;
display:flex;
justify-content:space-between;
border:1px solid gray`
const Input=styled.input`
border:none;
flex:8;
${mobile({flex:7})}

padding-left:24px`
const Button=styled.button`
flex:1;
${mobile({flex:2})}
background-color:teal;
color:white;
border:none
`





const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get Timely Updates for your favourait Products. ..</Description>
        <InputContainer>
        <Input placeholder='Your Email'/>
        <Button><BsFillSendArrowUpFill /></Button>
        
        </InputContainer>
    </Container>
  )
}

export default NewsLetter