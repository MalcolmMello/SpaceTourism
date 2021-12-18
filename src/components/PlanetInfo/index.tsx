import * as C from './styles'

interface Props {
    name: string,
    images: string,
    desc: string,
    distance: string,
    travel: string
}

export const PlanetInfo = ({name, images, desc, distance, travel}: Props) => {
    return (
        <C.Container>
            <C.ImageArea>
                <img src={images} />
            </C.ImageArea>
            <C.InfoArea>
                <C.Title>{name.toUpperCase()}</C.Title>
                <C.Desc>{desc}</C.Desc>
                <C.TravelData>
                    <C.Kilometers>
                        <p>AVG. DISTANCE</p>
                        {distance.toUpperCase()}
                    </C.Kilometers>
                    <C.Days>
                        <p>EST. TRAVEL TIME</p>
                        {travel.toUpperCase()}
                    </C.Days>
                </C.TravelData>
            </C.InfoArea>
        </C.Container>
    )
}