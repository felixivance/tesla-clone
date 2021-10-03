import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';

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