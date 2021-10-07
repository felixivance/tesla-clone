import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <Container>
            {/* logo */}
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            {/* menu */}
            <Menu>
                 <a  href="">Model S</a> 
                <a  href="">Model 3</a> 
                <a  href="">Model X</a>
                <a  href="">Model Y</a>
            </Menu>
            {/*right   */}
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu />
            </RightMenu>

            <BurgerMenu> 
                    <CloseWrapper>
                        <CustomClose />
                    </CloseWrapper>
                   
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Cyber Truck</a></li>
                    <li><a href="">RoadStar</a></li>
                    <li><a href="">Semi</a></li>
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
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600
        }
    }
    
`;

const CustomClose = styled(CloseIcon)`

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`