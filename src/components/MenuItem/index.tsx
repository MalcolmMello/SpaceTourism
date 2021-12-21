import * as C from './styles'
import { Link } from 'react-router-dom'

interface Props {
    path: string,
    step: string,
    desc: string,
    active: boolean
}

export const MenuItem = ({path, step, desc, active}: Props) => {
    return (
        <Link to={path}>
            <C.MenuItem active={active}>
                <p>{step}</p>
                {desc}
            </C.MenuItem>
        </Link>
    )
}