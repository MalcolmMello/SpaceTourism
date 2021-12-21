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
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
        color: ${props => props.active ? '#000' : '#999'};
        border: ${props => props.active ? '1px solid #FFF' : '1px solid #999'}
    }
`