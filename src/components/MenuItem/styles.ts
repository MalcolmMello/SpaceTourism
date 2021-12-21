import styled from "styled-components";

export const MenuItem = styled.li<{active: boolean}>`
    display: flex;
    height: 96px;
    align-items: center;
    margin: 0px;
    margin-left: 50px;
    cursor: pointer;
    border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid transparent'};
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    };

    &:hover {
        border-bottom: ${props => props.active ? '3px solid #FFF' : '3px solid #999'};
    }
`