import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: #FFF
`

export const ImageArea = styled.div`
    flex: 1;

    img {
        width: 370px;
        height: 370px;
    }
`

export const InfoArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    font-size: 100px;
    margin: 0px;
    color: rgb(255,255,230);
`

export const Desc = styled.p` 
    font-size: 18px;
    font-weight: 300;
    color: rgb(255,255,230);
`

export const TravelData = styled.div`
    display: flex;
    height: 90px;
    align-items: center;
    width: 490px;
    border-top: 1px solid #383B4B;
    color: rgb(255,255,230);
`

export const Kilometers = styled.div`
    font-size: 28px;

    p {
        font-size: 14px;
        margin: 0px;
        font-weight: 300;
        margin-bottom: 10px;
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
`