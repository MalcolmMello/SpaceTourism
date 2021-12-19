import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 490px;
    color: #FFFFE6;
`

export const DataArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const Role = styled.p`
    font-size: 32px;
    margin: 0px;
    font-weight: 300
`

export const Name = styled.h1`
    width: 600px;
    font-size: 56px;
    margin: 0;
`

export const Bio = styled.p`
    height: 120px;
    color: #FFF;
    font-size: 18px;
    margin: 0px;
    margin-top: 20px;
    font-weight: 300
`

export const PicArea = styled.div`
    height: 100vh;
    width: 490px;
    height: 100%;

    img {
        margin-auto;
    }
`