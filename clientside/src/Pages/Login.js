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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      center;
  background-size: cover;

`
const Wrapper=styled.div`
width:25%;
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
flex-direction:column;


`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;


`
const Agreemnet=styled.span`
font-size:12px;
margin:20px 0;

`
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px

`
const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <Form>
                
                <Input placeholder='email' />
                <Input placeholder='password' />
                
                {/* <Agreemnet>by crating an account you need to be agree following trems</Agreemnet> */}
                <Button>Sign in</Button>
                <Link>Do You nat remmeber the password?</Link>
                <Link>Create an Account</Link>
            </Form>
        </Wrapper>
        </Container>
  )
}

export default Login