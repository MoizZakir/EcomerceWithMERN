import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'
const Container=styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      center;
  background-size: cover;

`
const Wrapper=styled.div`
width:40%;
${mobile({width:"75%"})};
padding:20px;
background-color:white
`
const Title=styled.h1`
font-size:24px;
font-weight:300;


`
const Form=styled.form`
display:flex;
flex-wrap:wrap;


`
const Input=styled.input`
flex:1;
min-width:40%;

margin:20px 10px 0px 0px;
padding:10px;


`
const Agreemnet=styled.span`
font-size:12px;
margin:20px 0

`
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder='name' />
                <Input placeholder='lastname' />
                <Input placeholder='email' />
                <Input placeholder='password' />
                <Input placeholder='confirm passowrd' />
                <Agreemnet>by crating an account you need to be agree following trems</Agreemnet>
                <Button>Signup</Button>
            </Form>
        </Wrapper>
        </Container>
  )
}

export default Register