import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            {/* {model, tagline, img */}
            <Section 
                model="Model S" 
                tagline="Order Online For Touchless Delivery" 
                img="/images/model-s.jpg"  
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" 
            />
            <Section 
                model="Model 3" 
                tagline="Order Online For Touchless Delivery" 
                img="/images/model-3.jpg" 
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" 
            />
            <Section 
                model="Model X" 
                tagline="Order Online For Touchless Delivery"
                img="/images/model-x.jpg" 
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" 
             />
            <Section 
                model="Model Y" 
                tagline="Order Online For Touchless Delivery" 
                img="/images/model-y.jpg" 
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" 
            />

            <Section 
                model="Lowest cost solar panels in America"
                tagline="Money back guarantee"
                img="/images/solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                model="Solar for new roofs"
                tagline="Solar roof costs less than a new room"
                img="/images/solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                model="Accessories"
                tagline=""
                img="/images/accessories.jpg"
                leftBtnText="Shop Now"
                rightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
