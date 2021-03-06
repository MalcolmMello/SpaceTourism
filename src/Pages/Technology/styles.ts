import styled from "styled-components";

export const Container = styled.div<{background: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;

    
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
    height: calc(100vh - 350px);
    margin: auto;

    @media(max-width: 1024px) {
        width: 100vw
    }
`

export const TextArea = styled.div`
    max-height: 34px;
    flex: 1;
    color: rgb(255, 255, 230);
    .subtitle {
        font-size: 28px;
        margin: 0px;
        font-weight: 300
    }

    @media(max-width: 1024px) {
        text-align: center;
    }

    @media(max-width: 600px) {
        .subtitle {
            font-size: 16px;
        }
    }
`

export const TechnologyArea = styled.div`
    display: grid;
    width: 980px;
    color: #FFF;
    grid-template-columns: 1fr 2fr 2fr;
    margin-top: 20px;

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
`

export const StepArea = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1024px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const Step = styled.div`
    display: flex;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #FFFFE6;
    color: #000;
    font-size: 32px;
    margin-top: 25px;
    cursor: pointer
`

export const ImageArea = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: flex-end;
    right: 0;

    img {
        height: 450px;
        margin-bottom: -80px;
    }

    @media(max-width: 1024px) {
        display: none
    }
`

export const ImagePhone = styled.div`
    display: none;
    width: 100vw;
    margin-top: 60px;
    img {
        width: 100vw;
    }
    @media(max-width: 1024px) {
        display: flex
    }

    @media(max-width: 600px) {
        margin-top: 30px
    }
`