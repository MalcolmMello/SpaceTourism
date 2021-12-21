import * as C from './styles'

interface Props {
    active: boolean,
    onClick: () => void
}

export const CrewItem = ({active, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} active={active}></C.Container>
    )
}