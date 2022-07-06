import React from 'react'
import styled from 'styled-components'
import Section  from './Section'

function Home() {
  return (

    <Container>
        <Section 
        title = "Model 3"
        desc = "Order Online for Tuchless Delivery"
        BackgroundImg = "model-s.jpg"
        leftButtonText = "Custom Order"
        rightButtonText = "Existing Inventory"
        />
          <Section 
        title = "Model Y"
        desc = "Order Online for Tuchless Delivery"
        BackgroundImg = "model-y.jpg"
        leftButtonText = "Custom Order"
        rightButtonText = "Existing Inventory"
        />
          <Section 
        title = "Model W"
        desc = "Order Online for Tuchless Delivery"
        BackgroundImg = "model-x.jpg"
        leftButtonText = "Custom Order"
        rightButtonText = "Existing Inventory"
        />
          <Section 
        title = "Model SC"
        desc = "Order Online for Tuchless Delivery"
        BackgroundImg = "model-3.jpg"
        leftButtonText = "Custom Order"
        rightButtonText = "Existing Inventory"
        />
           <Section 
        title = "Lowest Cost Solar Panels in America"
        desc = "Money-back guaranted"
        BackgroundImg = "solar-panel.jpg"
        leftButtonText = "Order now"
        rightButtonText = "Learn More"
        />
        <Section 
        title = "Solar for New Roofs"
        desc = "Solar Rool Costs Less Than a New Roof Plus Solar Panels"
        BackgroundImg = "solar-roof.jpg"
        leftButtonText = "Order now"
        rightButtonText = "Learn More"
        />
          <Section 
        title = "Accessories"
        desc = ""
        BackgroundImg = "accessories.jpg"
        leftButtonText = "Shop now"
      
        />


  

       
    </Container>
    

  )
}

export default Home


// style part 
const Container = styled.div`
height:100vh;

`
