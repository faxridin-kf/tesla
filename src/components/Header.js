import React, {useState} from 'react'
import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu"
import {selectCars} from '../features/carSlice/carSlice'
import {useSelector} from 'react-redux'
function Header() {
 const [burgerStatus, setBurgerState] = useState(false);
 const cars = useSelector(selectCars)
 return (
  <Container>
<a href="">
    <img src="/images/logo.svg" alt=""/>
   </a>
   <Menu>
    {cars && cars.map((car, index)=>(
      <a key={index} href="#" >{car}</a>
    ))}
   </Menu>
   <RightMenu>
   <a href="#" >Shop</a>
   <a href="#" >Account</a>
 <CustomMenu onClick={()=>setBurgerState(true)}/>
   </RightMenu>
   <BurgerNav show={burgerStatus}>
    <CloseWrapper>
    <CustomClose onClick={()=>setBurgerState(false)}/>
    </CloseWrapper>
    {cars && cars.map((car, index)=>(
      <li key={index}><a href="#" >{car}</a></li>
    ))}
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">Exiting Inventory</a></li>
   </BurgerNav>
  </Container>
 )
}

export default Header
const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
right: 0;
left: 0;
justify-content: space-between;
z-index: 1;
`
// const MainMenu = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// `
const Menu = styled.div`
display: flex;
aling-items: center;
a{
 font-weight: 600;
 text-transform: uppercase;
 padding: 0 10px;
 flex-wrap: no-wrap;
}

@media(max-width: 768px){
 display: none;
}

`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
 font-weight: 600;
text-transform: uppercase;
margin-right: 10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: #fff;
width: 300px;
z-index: 100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
justify-content: flex-start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.5s ease-in;
li{
 padding: 15px 0;
 a{
  font-weight: 600;
 }
}
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`