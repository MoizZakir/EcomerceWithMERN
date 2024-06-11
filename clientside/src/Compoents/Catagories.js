import React from 'react'
import styled from 'styled-components'
import { catgr } from './dummydata'
import CatagoriesItems from './CatagoriesItems'
import { mobile } from '../Pages/Responsive'

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column" ,padding:"0px"})}
padding:20px;
justify-content:space-between



`

const Catagories = () => {
  return (
    <Container>
        {catgr.map(e=>(
            <CatagoriesItems items={e} />
        ))}
    </Container>
  )
}

export default Catagories