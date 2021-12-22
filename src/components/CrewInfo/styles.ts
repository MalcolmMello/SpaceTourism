import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 490px;
    color: ##FFF;

    @media(max-width: 600px) {
        width: auto
    }
`

export const DataArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    @media(max-width: 1024px) {
        align-items: center
    }
`

export const Role = styled.p`
    font-size: 32px;
    margin: 0px;
    font-weight: 300;
    color: #FFF;

    @media(max-width: 600px) {
        font-size: 16px;
    }
`

export const Name = styled.h1`
    width: 600px;
    font-size: 56px;
    margin: 0;
    color: #FFF;

    @media(max-width: 1024px) {
        text-align: center
    }

    @media(max-width: 600px) {
        font-size: 24px;
        width: auto;
    }
`

export const Bio = styled.p`
    height: 120px;
    color: #FFF;
    font-size: 18px;
    margin: 0px;
    margin-top: 20px;
    font-weight: 300;

    @media(max-width: 1024px) {
        text-align: center
    }

    @media(max-width: 600px) {
        font-size: 15px;
    }
`
