import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import styled from 'styled-components'
import { data } from './dummydata'
import { mobile } from '../Pages/Responsive'
const Container=styled.div`
sidth:100vw;
height:100vh;
display:flex;
overflow: hidden;
position:relative;

${mobile({display:"none"})}

`

const Arrow=styled.div`
z-index:1;
width:50px;
height:50px;
background-color:lightGray;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.Direction=='left' && "10px"};
right:${props=>props.Direction=='right' && "10px"};
margin:auto;
opacity:0.5;
cursor:pointer
`
const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.dir*-100}vw)
`
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
// background-color:${props=>props.bg}
`   
const ImageContainer=styled.div`
flex:1;
height:100%;

`


const Image=styled.img`
height:80%`
const ImageInfo=styled.div`
flex:1;
padding:50px;

`


const Title=styled.h1`
font-size:70px
`
const Desc=styled.p`
margin:50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px`
const Button=styled.button`
font-size:20px;
padding:10px;
background-color:transparent;


`
function Slider() {
    const [slideIndex,setSlideIndex]=useState(0)
    const clickHandler=(dir)=>{

        if(dir=="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:3)
        }
        else{
            setSlideIndex(slideIndex<3?slideIndex+1:0)
        }
    }
    return (
    <Container>
        <Arrow Direction='left' onClick={()=>clickHandler('left')} >
        <IoMdArrowDropleft />
        </Arrow>
        <Wrapper dir={slideIndex}>
            {data.map(e=>(

            <Slide bg={e.bg}>
            <ImageContainer>
                <Image src={e.img}/>

                
            </ImageContainer>
            <ImageInfo>
                <Title>{e.title}</Title>
                <Desc>{e.dec}</Desc>
                <Button>SHOW NOW</Button>
            </ImageInfo>
            </Slide>
            ))}
           
        </Wrapper>
        <Arrow  Direction='right'  onClick={()=>clickHandler('right')}>
        <IoMdArrowDropright />
        </Arrow>
    </Container>
  )
}

export default Slider