import React from 'react'
import Section from '../components/Section'
import styled from 'styled-components'
function Home() {
 return (
  <Container>
   <Section
   title="Model S"
   description="Order Online for touchless Delivery"
   background="model-s.jpg"
   leftBtnText="Custom Order"
   rightBtnText="Existing inventory"
   />
   <Section
   title="Model Y"
   description=" Order Online for Touchless Delivery"
   background="model-y.jpg"
   leftBtnText="Custom Order"
   rightBtnText="Existing inventory"
   />
   <Section
    title="Model 3"
    description="Order Online for touchless Delivery"
    background="model-3.jpg"
    leftBtnText="Custom Order"
    rightBtnText="Existing inventory"
   />
   <Section
    title="Model X"
    description="Order Online for touchless Delivery"
    background="model-x.jpg"
    leftBtnText="Custom Order"
    rightBtnText="Existing inventory"
   />
    <Section
    title="Lowest Cost Solar Panels in America"
    description="Money-back guarantee"
    background="solar-panel.jpg"
    leftBtnText="Order now"
    rightBtnText="Learn more"
   />
   <Section
    title="Solar for New Roofs"
    description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
    background="solar-roof.jpg"
    leftBtnText="Order now"
    rightBtnText="Learn more"
   />
    <Section
    title="Accessories"
    description=""
    background="accessories.jpg"
    leftBtnText="Shop now"
    
   />
  </Container>
 )
}

export default Home
const Container = styled.div`
height: 100vh;
`