import * as C from './styles'
import { Link } from 'react-router-dom'

interface Props {
    path: string,
    step: string,
    desc: string,
    active: boolean,
    isOpen: boolean
}

export const MenuItem = ({path, step, desc, active, isOpen}: Props) => {
    return (
        <Link to={path}>
            <C.MenuItem active={active} isOpen={isOpen}>
                <p>{step}</p>
                {desc}
            </C.MenuItem>
        </Link>
    )
}