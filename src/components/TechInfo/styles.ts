import styled from "styled-components";

export const DescArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 1024px) {
        align-items: center;
        margin-top: 20px;
        padding: 15px
    }
`

export const DescTech = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin: 0px;

    @media(max-width: 600px) {
        font-size: 14px;
    }
    
`

export const DescTitle = styled.h1`
    font-size: 45px;
    margin: 0px;
    margin-bottom: 10px;

    @media(max-width: 600px) {
        font-size: 24px;
        margin-top: 5px
    }
`

export const Desc = styled.p`
    height: 144px;
    font-size: 18px;
    font-weight: 300;
    margin: 0px;

    @media(max-width: 1024px) {
        text-align: center;
    }

    @media(max-width: 600px) {
        font-size: 14px;
    }
`