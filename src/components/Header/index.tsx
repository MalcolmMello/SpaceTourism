import * as C from './styles'
import { Link } from 'react-router-dom'
import { MenuItem } from '../MenuItem'
import { useForm } from '../../contexts/FormContext'
import { useState } from 'react'



export const Header = () => {
    const {state} = useForm()
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
            <C.Container>
                <C.LogoArea>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                </C.LogoArea>
                <C.MenuArea>
                    <C.MobileMenu onClick={handleToggle}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </C.MobileMenu>
                    <C.Row></C.Row>
                    <C.Menu isOpen={isOpen}>
                        <MenuItem
                            path="/"
                            step="01"
                            desc="HOME"
                            active={state.currentHeader === 0}
                            isOpen={isOpen}
                        />
                        <MenuItem
                            path="/Destination"
                            step="02"
                            desc="DESTINATION"
                            active={state.currentHeader === 1}
                            isOpen={isOpen}
                        />
                        <MenuItem
                            path="/Crew"
                            step="03"
                            desc="CREW"
                            active={state.currentHeader === 2}
                            isOpen={isOpen}
                        />
                        <MenuItem
                            path="/Technology"
                            step="04"
                            desc="TECHNOLOGY"
                            active={state.currentHeader === 3}
                            isOpen={isOpen}
                        />
                    </C.Menu>
                </C.MenuArea>
            </C.Container>
        </>
    )
}