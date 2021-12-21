import * as C from './styles'

interface Props {
    name: string,
    desc: string
}

export const TechInfo = ({name, desc}: Props) => {
    return (
        <C.DescArea>
            <C.DescTech>THE TERMINOLOGY...</C.DescTech>
            <C.DescTitle>{name.toUpperCase()}</C.DescTitle>
            <C.Desc>{desc}</C.Desc>
        </C.DescArea>
    )
}