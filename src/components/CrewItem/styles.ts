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

    @media(max-width: 1024px) {
        margin-right: 0px;
        margin-left: 20px
    }

    @media(max-width: 600px) {
        margin-right: 10px;
        margin-left: 0px
    }
`