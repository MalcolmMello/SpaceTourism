import * as C from './styles'

interface Props {
    name: string,
    bio: string,
    role: string
}

export const CrewInfo = ({name, bio, role}: Props) => {
    return (
        <C.Container>
            <C.DataArea>
                <C.Role>
                    {role}
                </C.Role>
                <C.Name>
                    {name}
                </C.Name>
                <C.Bio>
                    {bio}
                </C.Bio>
            </C.DataArea>
        </C.Container>
    )
}