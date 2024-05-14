import React from 'react'
import styled from 'styled-components'
import { catgr } from './dummydata'
import CatagoriesItems from './CatagoriesItems'

const Container=styled.div`
display:flex;
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