import styled from "styled-components";
import background from '../../spacets/startercode/assets/destination/destinationdesktop.jpg'
import backgroundTablet from '../../spacets/startercode/assets/destination/background-destination-tablet.jpg'


export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    overflow: auto;

    @media(max-width: 1024px) {
        background-image: url(${backgroundTablet});
    }
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
    height: calc(100vh - 350px);
    margin: auto;

    @media(max-width: 600px) {
        width: auto;
        margin: 0px;
        margin-top: 120px
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

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        .subtitle {
            font-size: 16px
        }
    }
`

export const PlanetArea = styled.div`
    display: flex;
    max-height: 34px;
    flex: 2;
    color: #FFF;
    justify-content: flex-end;

    a {
        text-decoration: none;
        color: #FFF;
    }

    @media(max-width: 1024px) {
        margin-top: 30px;
        justify-content: center
    }

    @media(max-width: 600px) {
        max-height: 28px;
        margin-top: 10px;
    }
`

export const PlanetNames = styled.ul`
    display: flex;
    width: 490px;
    height: 34px;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;

    @media(max-width: 600px) {
        width: auto
    }
`
