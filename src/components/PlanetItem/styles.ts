import styled from "styled-components";

export const Container = styled.div<{active: boolean}>`
    display: flex;
    height: 34px;
    align-items: center;
    margin: 0px;
    margin-right: 50px;
    cursor: pointer;
    padding: 5px;
    color: #FFF;
    border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid transparent'};
    
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    };

    &:hover {
        border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid #ccc'};   
    }
`