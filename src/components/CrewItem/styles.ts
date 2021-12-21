import styled from "styled-components";

export const Container = styled.div<{active: boolean}>`
    display: flex;
    width:11px;
    height: 11px;
    align-items: center;
    margin: 0px;
    margin-right: 20px;
    cursor: pointer;
    padding: 5px;
    color: #FFF;
    border-radius: 50%;
    border: 1px solid #FFF;
    background-color: ${props => props.active ? '#FFF' : 'transparent'};
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    }
    
    transition: all ease 0.3s;
    &:hover {
        background-color: ${props => props.active ? '#FFF' : '#EEE'}
    }
`