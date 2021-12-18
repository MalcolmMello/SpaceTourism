import styled from 'styled-components'

export const Container = styled.div<{background: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
`

export const ContentArea = styled.div`
    display: flex;
    width: 980px;
    margin-top: 200px;
`

export const TextArea = styled.div`
    flex: 1;
    color: rgb(255, 255, 230);
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
`

export const ExploreArea = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Circle = styled.div`
    display: flex;
    width: 274px;
    height: 274px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgb(255, 255, 230);
    font-size: 32px;
`