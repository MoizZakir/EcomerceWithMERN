import React from 'react'
import styled from 'styled-components'

import { CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { mobile } from '../Pages/Responsive'



function Nabar() {
    const Container=styled.div`
    
    height:60px;
    ${mobile({height:"50px"})};
    `
    const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between
    align-items:center;
    ${mobile({padding:'10px 0'})};
    
    `
    const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center
    
    
    `
    const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})};
    
    `
    const SearchContainer=styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    ${mobile({marginLeft:"5px"})}
    

    
    `


    const Input=styled.input`
    border:none;
    ${mobile({width:"50px"})}
    `
    const Right=styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:11px;
    ${mobile({justifyContent:"center",flex:2,gap:"0px"})};
    flex:1`
    
    const MenueItems=styled.div`
    font-size:14px;
    cursor:pointer;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
    `

    const Center=styled.div`
    text-align:center;
    

flex:1;`



const Logo=styled.h1`
font-weight:500;
${mobile({fontSize:"24px"})}

`












    return (
    <Container>
        <Wrapper>
        
        <Left>
            <Language>En</Language>
            <SearchContainer><CiSearch style={{fontSize:"20px"}} />
            <Input placeholder='search'/></SearchContainer>
         
            </Left>
        <Center><Logo>MyChoice</Logo></Center>
        <Right>
            <MenueItems>Register</MenueItems>
            <MenueItems>Login</MenueItems>
            <MenueItems>
            <IoCartOutline style={{fontSize:'25px'}} />
            </MenueItems>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Nabar