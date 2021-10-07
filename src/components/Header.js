import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { selectCars } from"../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    console.log(cars);

    return (
        <Container>
            {/* logo */}
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            {/* menu */}
            <Menu>
                {
                    cars && cars.map((car, index)=>(
                        <a  href="" key={index}>{car}</a> 
                    ))
                }
                 
            
            </Menu>
            {/*right   */}
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu onClick={ ()=> setBurgerStatus(true) }/>
            </RightMenu>

            <BurgerMenu show={burgerStatus} > 
                    <CloseWrapper>
                        <CustomClose onClick={ ()=> setBurgerStatus(false) }/>
                    </CloseWrapper>
                    {
                       cars && cars.map((car, index)=>(
                            <li key={index}><a href="">{car}</a></li>
                       ))
                   }
                    
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Cyber Truck</a></li>
                    <li><a href="">RoadStar</a></li>
                    <li><a href="">Trade - In</a></li>
                
            </BurgerMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    z-index: 1;
    justify-content: space-between;
    // background-color:white;
    // opacity: 0.6;
`;

const Menu = styled.div`
    display:flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-transofrm: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
     
    @media(max-width:768px){
        display:none;
    }
`;

const RightMenu = styled.div`
        display:flex;
        align-items:center;
        a {
            font-weight: 600;
            text-transofrm: uppercase;
           margin-right:10px;
            
        }
`;

const CustomMenu = styled(MenuIcon)`
        cursor:pointer
`;

const BurgerMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background:white;
    width:300px;
    list-style: none;
    padding: 20px;
    text-align: start;

    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
    transition: transform 0.5s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600
        }
    }
    
`;

const CustomClose = styled(CloseIcon)`
    cursor:pointer
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`