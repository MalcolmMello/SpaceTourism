import styled from "styled-components";

export const Container = styled.div<{active: boolean}>`
    display: flex;
    height: 28px;
    align-items: center;
    margin: 0px;
    margin-right: 50px;
    cursor: pointer;
    padding: 5px;
    color: #FFF;
    border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid transparent'};
    transition: all ease 0.3s;
    
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    };

    &:hover {
        border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid #ccc'};   
    }

    @media(max-width: 1024px) {
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    
    @media(max-width: 600px) {
        font-size: 14px;
    }
`