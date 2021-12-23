import styled from 'styled-components'

export const Container = styled.div<{background: string}>`
    display: flex;
    height: 100vh;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    padding: 0px 60px;

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 600px) {
        justify-content: center;
        overflow: auto
    }
    
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
    height: calc(100vh - 350px);
    margin: auto;

    @media(max-width: 1024px) {
        justify-content: center;
        width: min-content;

        margin-top: 100px
    }

    @media(max-width: 600px) {
        margin: 0px;
        margin-top: 96px;
    }
`

export const TextArea = styled.div`
    max-height: 34px;
    flex: 1;
    color: #FFF;
    .subtitle {
        font-size: 28px;
        margin: 0px;
        font-weight: 300
    }

    @media(max-width: 1024px) {
        .subtitle {
            font-size: 16px;
        }
    }

    @media(max-width: 600px) {
        p {
            text-align: center
        }
    }
`

export const CrewData = styled.div`
    display: flex;
    margin-top: 60px;
    margin-bottom: 20px;

    @media(max-width: 1024px) {
        justify-content: center;
        margin-top: 0px
    }

    @media(max-width: 600px) {
        margin-top: 20px
    }
`

export const CrewArea = styled.div`
    display: flex;
    max-height: 34px;
    flex: 2;
    color: #FFF;
    justify-content: flex-start;

    a {
        text-decoration: none;
        color: #FFF;
    }

    @media(max-width: 1024px) {
        justify-content: center;
    }

    @media(max-width: 600px) {
        margin-top: 10px
    }
`

export const CrewName = styled.ul`
    display: flex;
    width: 490px;
    height: 34px;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;


    @media(max-width: 1024px) {
        justify-content: center;
        width: 600px;
    }

    @media(max-width: 600px) {
        display: none;
        width: auto;
    }
`

export const CrewNamePhone = styled.div`
    display: none;
    width: 490px;
    height: 34px;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;

    @media(max-width: 600px) {
        display: flex;
        width: auto
    }
`

export const PicArea = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 490px;

    img {
        height: 520px;
    }


    @media(max-width: 600px) {
        display: none
    }
`

export const PicAreaPhone = styled.div`
    display: none;
    justify-content: center;
    width: auto;
    align-items: center;
    margin-top: 20px;

    img {
        height: 223px;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #CCC;
    }
`