import * as C from './styles'

export const Header = () => {
    return (
        <> 
            <C.Container>
                <C.LogoArea>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                </C.LogoArea>
                <C.MenuArea>
                    <C.Row></C.Row>
                    <C.Menu>
                        <C.MenuItem>
                            <p>01</p>
                            HOME
                        </C.MenuItem>
                        <C.MenuItem>
                            <p>02</p>
                            DESTINATION
                        </C.MenuItem>
                        <C.MenuItem>
                            <p>03</p>
                            CREW
                        </C.MenuItem>
                        <C.MenuItem>
                            <p>04</p>
                            TECHNOLOGY
                        </C.MenuItem>
                    </C.Menu>
                </C.MenuArea>
            </C.Container>
        </>
    )
}