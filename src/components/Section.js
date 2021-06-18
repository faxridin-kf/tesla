import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title, description, leftBtnText, rightBtnText,background}) {
 
 return (
  <Wrap bgImage={background}>
    <Fade bottom>
    <ItemText>
   <h1>{title}</h1>
   <p> {description}</p>
  </ItemText>
    </Fade>

  <Buttons>
    <Fade bottom>
    <ButtonGroup>
   <LeftButton>
  {leftBtnText}
   </LeftButton>
 {rightBtnText && 
   <RightButton>
   {rightBtnText}
  </RightButton>
 }
  </ButtonGroup>
    </Fade>
<Fade bottom>
  
<DownArrow src="/images/down-arrow.svg" />
</Fade>
  </Buttons>
  </Wrap>
 )
}

export default Section
const Wrap = styled.div`
z-index: 10;
width: 100vw;
height: 100vh;
// background-image: url('./images/model-s.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: ${props => `url("/images/${props.bgImage}")` };

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
// align-items: center;
// justify-content: center;
margin-bottom: 30px;

@media (max-width: 768px) {
 flex-direction:column;
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: .85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color: #fff;
opacity: 0.65;
color: black;
`
const DownArrow = styled.img`
margin-top: 20px;
margin-bottom: 10px;
height: 40px;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`