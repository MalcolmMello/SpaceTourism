import styled from "styled-components";

export const MenuItem = styled.li<{active: boolean, isOpen: boolean}>`
    display: flex;
    height: 96px;
    align-items: center;
    margin: 0px;
    margin-left: 50px;
    cursor: pointer;
    border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid transparent'};
    transition: all ease 0.3s;
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    };

    &:hover {
        border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid #999'};
    }

    @media(max-width: 1024px) {
        margin-left: 40px;
        font-size: 14px;
        p {
            display: none
        }
    }

    @media(max-width: 600px) {
        display: ${props => props.isOpen ? 'flex' : 'none'};
    }
`