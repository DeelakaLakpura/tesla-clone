import React from 'react'
import styled from 'styled-components'

function Section({title,desc,leftButtonText,rightButtonText,BackgroundImg}) {

  return (
    <div>
        <Wrap bgImage = {BackgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
              {leftButtonText}
                </LeftButton>
                {rightButtonText && 
                
                <RightButton>
                {rightButtonText}
                 </RightButton>
                }
               
            </ButtonGroup>
            <DownArrow src = "/images/down-arrow.svg">
            </DownArrow>
            </Buttons>
        </Wrap> 
    </div>
  )
}



export default Section

const Wrap = styled.div`

width:100vw;
height: 100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image: url('/images/model-3.jpg');
display:flex;
flex-direction: column;
justify-content: space-between; //vertical
align-items: center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}") `}






`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonGroup = styled.div`

display:flex;
margin-bottom: 30px;

@media (max-width: 768px){
    flex-direction:column;
}



`


const LeftButton = styled.div`

background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 250px;
color: white;
display: flex;
justify-content: center;
align-items:center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor :pointer;
margin :8px;


`
const RightButton = styled(LeftButton)`
background-color: white;
opacity:0.65;
color:black;


`
const DownArrow = styled.img`
height: 40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
