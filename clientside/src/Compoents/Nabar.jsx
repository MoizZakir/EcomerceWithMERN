import React from 'react'
import styled from 'styled-components'

import { CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

function Nabar() {
    const Container=styled.div`
   
    height:60px
    `
    const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between
    align-items:center;
    
    `
    const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center
    
    
    `
    const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    
    `
    const SearchContainer=styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;

    
    `


    const Input=styled.input`
    border:none
    `
    const Right=styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:11px;
    flex:1`
    
    const MenueItems=styled.div`
    font-size:14px;
    cursor:pointer
    `

    const Center=styled.div`
    text-align:center;
    

flex:1;`



const Logo=styled.h1`
font-weight:500


`












    return (
    <Container>
        <Wrapper>
        
        <Left>
            <Language>En</Language>
            <SearchContainer><CiSearch style={{fontSize:"20px"}} />
            <Input></Input></SearchContainer>
         
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