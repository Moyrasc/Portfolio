import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: auto;
    background-color: rgba(10, 11, 13, 0.65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
    position: sticky;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
        position:static; 
}
`;

const NavbarLinkContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content:space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column; 
        transition: height 0.3s ease-in-out; 
        width: 100%; 
        background-color: rgba(10, 11, 13, 0.65);
        text-align: center;
}
`;

const NavbarLink = styled(Link)`
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    padding-right: 2rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;

    &:hover,
    &:focus {
        color: #bdac8d;
    }

    & img {
        width: 150px;
        height: 150px;
}
@media screen and (max-width: 768px){
    padding-left:3rem;
}
`;

const NavContentLink = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column; 
        transition: height 0.3s ease-in-out; 
        width: 100%; 
        background-color: rgba(10, 11, 13, 0.65);
        text-align: center;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}
}
`;

const MobileIcon = styled.div`
    display: none;

        @media screen and (max-width: 768px) {
            display: flex;
            margin-top: 10px;
            padding-left: 1rem;

            svg {
                fill: #bdac8d;
                height: 40px;
                width: 40px;
    }
}
`;

export {
    NavContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavContentLink,
    MobileIcon
};
