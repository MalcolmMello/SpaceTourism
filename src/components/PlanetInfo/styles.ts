import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: #FFF;

    @media(max-width: 1024px) {
        flex-direction: column;
        margin-top: 50px
    }

    @media(max-width: 600px) {
        margin-top: 20px;
    }
`

export const ImageArea = styled.div`
    flex: 1;

    img {
        width: 370px;
        height: 370px;
    }

    @media(max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 600px) {
        img {
            width: 170px;
            height: 170px;
        }
    }
`

export const InfoArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center
    }

    @media(max-width: 600px) {
        padding: 10px;
    }
`

export const Title = styled.h1`
    font-size: 100px;
    margin: 0px;
    color: #FFF;

    @media(max-width: 600px) {
        font-size: 48px;
    }
`

export const Desc = styled.p` 
    font-size: 18px;
    font-weight: 300;
    color: #FFF;
    text-align: center;

    @media(max-width: 1024px) {
        width: 570px;
        height: 96px;
    }

    @media(max-width: 600px) {
        font-size: 15px;
        margin: 0px;
        width: auto
    }
`

export const TravelData = styled.div`
    display: flex;
    height: 90px;
    align-items: center;
    width: 490px;
    border-top: 1px solid #383B4B;
    color: #FFF;

    @media(max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center
    }

    @media(max-width: 600px) {
        flex-direction: column;
        width: auto;
        height: auto;
        margin-top: 10px;
    }
`

export const Kilometers = styled.div`
    font-size: 28px;

    p {
        font-size: 14px;
        margin: 0px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10px;

        p {
            margin-bottom: 5px
        }
    }
`

export const Days = styled.div`
    font-size: 28px;
    margin-left: 70px;

    p {
        font-size: 14px;
        margin: 0px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 0px;
        margin-top: 10px;

        p {
            margin-bottom: 5px
        }
    }
`