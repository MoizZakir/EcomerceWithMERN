import React from 'react'
import { BsFillThreadsFill } from 'react-icons/bs'
import { FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io5'
import { LuInstagram } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'
import { mobile } from '../Pages/Responsive'
const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}

`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px`
const Logo=styled.h2`
`
const Desc=styled.p`
margin:20px 0;



`
const SocialContaier=styled.div`
display:flex;


`
const SocailIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin:20px;
background-color:${props=>(props.color)}
`

const Center=styled.div`
flex:1;
padding:20px;`

const Title=styled.h3`
margin-bottom:30px;


`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap`
const ListItems=styled.li`
width:50%;
margin-bottom:10px;
`
const Right=styled.div`
flex:1;
padding:20px;
${mobile({backfroundColor:`#fff8f8`})}`

const ContactItem=styled.div`
margin-bottom:10px;
display:flex;
align-items:center`
const Payment=styled.img`
width:50%`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Creative Solution</Logo>
            <Desc>there are many thing we have but you will find one of the best product here.And rondomized you will be get paid</Desc>
            <SocialContaier>
                <SocailIcon color='blue'><IoLogoFacebook /></SocailIcon>
                <SocailIcon color='pink'><LuInstagram /></SocailIcon>
                <SocailIcon color='lightBlue'><FaTwitter /></SocailIcon>
                <SocailIcon color='red'><BsFillThreadsFill/></SocailIcon>
            </SocialContaier>
        </Left>
        <Center>
        <Title>USeFull Links</Title>
        <List>
            <ListItems>Home</ListItems>
            <ListItems>Home</ListItems>
            <ListItems>Home</ListItems>
            <ListItems>Home</ListItems>
            <ListItems>Home</ListItems>
            <ListItems>Home</ListItems>
        </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <FaMapMarkerAlt style={{marginRight:'10px'}} />House No:H-22/1 Nazimabad Karachi Pakistan</ContactItem>
            <ContactItem> <FaPhone style={{marginRight:'10px'}} />+92131215191</ContactItem>
            <ContactItem> <MdEmail style={{marginRight:'10px'}} />Contact at creativeXYZ@mail.com</ContactItem>
            <Payment src='https://www.kindpng.com/picc/m/48-480088_payment-method-credit-card-master-card-hd-png.png'/>
        </Right>
    </Container>
  )
}

export default Footer