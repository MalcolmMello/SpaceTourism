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

    @media(max-width: 1024px) {
        margin-top: 0px;
    }

    @media(max-width: 750px) {
       background-color: rgba(0, 0, 0, 0.5)
    }
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

    @media(max-width: 1170px) {
        display: none
    }

    @media(max-width: 1024px) {
        display: none;
    }
`

export const MenuArea = styled.nav`
    display: flex;
    height: inherit;
    flex: 2;
    backdrop-filter: blur(10px);
    background-color: rgba(250, 250, 250, 0.04);
    color: #FFF;

    a {
        text-decoration: none;
        color: #FFF;
    }

    @media(max-width: 1024px) {
        justify-content: center;
    }
    @media(max-width: 750px) {
        background-color: transparent;
        backdrop-filter: none;
        justify-content: flex-end;
        align-items: center
    }
`

export const Menu = styled.ul<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    .selected {
        border-bottom: 1px solid #FFF;
    }

    @media(max-width: 1024px) {
        padding-left: 0px
    }

    @media(max-width: 750px) {
        display: flex;
        position: absolute;
        right: 0;
        width: ${props => props.isOpen ? '50vw' : '0px'};
        top: 96px;
        height: calc(100vh - 96px);
        background-color: rgba(0, 0, 0, 0.5);
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        transition: all ease 0.3s
    }
`

export const MobileMenu = styled.div`
    display: none;
    position: absolute;
    cursor: pointer;
    margin-right: 20px;

    div {
        width: 32px;
        height: 2px;
        background-color: #FFF;
        margin: 8px; 
    };

    @media(max-width: 750px) {
        display: block
    }
`
