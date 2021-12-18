import styled from "styled-components";

export const Container = styled.div<{background: string}>`
    display: flex;
    height: 100vh;
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


    .selected {
        border-bottom: 1px solid #FFF;
    }
`

export const PlanetItem = styled.li`
    display: flex;
    height: 34px;
    align-items: center;
    margin: 0px;
    margin-right: 50px;
    cursor: pointer;
    padding: 5px;
    color: rgb(255,255,230);
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    }
`