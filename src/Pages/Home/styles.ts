import styled from 'styled-components'

export const Container = styled.div<{background: string}>`
    height: 100vh;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
`