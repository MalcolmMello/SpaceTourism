import styled from "styled-components";


export const Container = styled.div<{active: boolean}>`
    display: flex;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.active ? '#FFF' : 'transparent'};
    border: 1px solid #FFF;
    color: ${props => props.active ? '#000' : '#FFF'};
    font-size: 32px;
    margin-top: 25px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.active ? '#FFF' : '#000'}
    }
`