import * as C from './styles'

interface Props {
    step: string,
    onClick: () => void,
    active: boolean
}

export const Step = ({step, onClick, active}: Props) => {
    return (
        <C.Container active={active} onClick={onClick}>
            {step}
        </C.Container>
    )
}