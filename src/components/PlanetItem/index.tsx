import * as C from './styles'

interface Props {
    planetName: string,
    active: boolean,
    onClick: () => void
}

export const PlanetItem = ({planetName, active, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} active={active}>
            {planetName}
        </C.Container>
    )
}