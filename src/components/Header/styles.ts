import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    position: absolute;
    height: 96px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-right: 0px;
    right: 0px;
`


export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    padding-left: 60px;
    flex: 1;
`   

export const Row = styled.div`
    display: flex;
    position: absolute;
    width: 380px;
    height: 1px;
    background-color: #FFF;
    margin-top: 48px;
    margin-left: -320px;
`

export const MenuArea = styled.nav`
    display: flex;
    height: inherit;
    flex: 2;
    background-color: rgba(250, 250, 250, 0.04);
    backdrop-filter: blur(10px);
    color: #FFF;

    a {
        text-decoration: none;
        color: #FFF;
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    .selected {
        border-bottom: 1px solid #FFF;
    }
`

export const MenuItem = styled.li`
    display: flex;
    height: 96px;
    align-items: center;
    margin: 0px;
    margin-left: 50px;
    cursor: pointer;
    p {
        margin: 0;
        margin-right: 15px;
        font-weight: bold;
    }
`