import styled from 'styled-components'
import background from '../../spacets/startercode/assets/homeitems/homeground.jpg'
import backgroundTablet from '../../spacets/startercode/assets/homeitems/background-home-tablet.jpg'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-size: cover;

    @media(max-width: 1024px) {
        background-image: url(${backgroundTablet});
    }
`

export const ContentArea = styled.div`
    display: flex;
    width: 980px;
    margin-top: 200px;

    @media(max-width: 1024px) {
        flex-direction: column;
        margin-top: 0px
    }

    @media(max-width: 600px) {
        width: auto;
        margin-top: 80px;
        padding: 10px;
    }
`

export const TextArea = styled.div`
    flex: 1;
    color: #FFF;
    .subtitle {
        font-size: 28px;
        margin: 0px;
        font-weight: 300
    }
    h1 {
        font-size: 150px;
        margin: 0px;
    }
    .text {
        font-size: 18px;
        font-weight: 300
    }

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 450px;
        margin: auto;
        text-align: center;
    }

    @media(max-width: 600px) {
        width: auto;

        .subtitle {
            font-size: 16px;
            margin-bottom: 30px;
        };
        h1 {
            font-size: 40px;
    
            margin-bottom: 20px;
        };
        .text {
            font-size: 15px;
        }
    }
`

export const ExploreArea = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;

    @media(max-width: 1024px) {
        justify-content: center;
        align-items: flex-end;
        margin-top: 50px;
    }
`

export const Circle = styled.div`
    display: flex;
    width: 274px;
    height: 274px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #FFF;
    font-size: 32px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        box-shadow: 0 0 5em #000;
    };

    @media(max-width: 600px) {
        width: 150px;
        height: 150px;
        font-size: 20px;
    }
`