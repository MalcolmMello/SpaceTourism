import styled from 'styled-components'

export const Container = styled.div<{background: string}>`
    display: flex;
    height: 100vh;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    padding: 0px 60px;
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

export const CrewData = styled.div`
    display: flex;
    margin-top: 60px;
    margin-bottom: 20px;
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


    .selected {
        border-bottom: 1px solid #FFF;
    }
`

export const CrewItem = styled.li`
    display: flex;
    width:11px;
    height: 11px;
    align-items: center;
    margin: 0px;
    margin-right: 20px;
    cursor: pointer;
    padding: 5px;
    color: rgb(255,255,230);
    border-radius: 50%;
    background-color: #FFFFE6;
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
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
`