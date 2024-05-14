import React from 'react'
import styled from 'styled-components'

const Announecment = () => {
    const Container=styled.div`
    height:38px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:500;
    text-align:center;
    `
  return (
    <div>
        <Container>Super Deal .Buy More upto 2000/- and get free dilvery All over Karachi
            </Container></div>
  )
}

export default Announecment