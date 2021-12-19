import * as C from './styles'
import { useEffect, useState } from 'react'
import { Data } from '../../spacets/startercode/data'
import background from '../../spacets/startercode/assets/destination/destinationdesktop.jpg'
import MoonPic from '../../spacets/startercode/assets/destination/image-moon.png'
import MarsPic from '../../spacets/startercode/assets/destination/image-mars.png'
import EuropaPic from '../../spacets/startercode/assets/destination/image-europa.png'
import TitanPic from '../../spacets/startercode/assets/destination/image-titan.png'
import { PlanetInfo } from '../../components/PlanetInfo'


interface Dest { 
    name: string; 
    images: { 
        png: string;
        webp: string; 
    };
    description: string; 
    distance: string; 
    travel: string;
}

export const Destination = () => {
    const [data, setData] = useState([Data])

    const [dest, setDest] = useState<Dest[]>([])

    const [filteredPlanet, setFilteredPlanet] = useState<Dest[]>([])

    const [planet, setPlanet] = useState('')

    const [pic, setPic] = useState(MoonPic)

    useEffect(()=>{
        data.map((item)=>{
            const destiny = item.destinations
            setDest(destiny)
        })
        setPlanet('Moon')
    },[])


    const handleMoon = () => {
        setPlanet('Moon')
        setPic(MoonPic)
    }

    const handleMars = () => {
        setPlanet('Mars')
        setPic(MarsPic)
    }

    const handleEuropa = () => {
        setPlanet('Europa')
        setPic(EuropaPic)
    }

    const handleTitan = () => {
        setPlanet('Titan')
        setPic(TitanPic)
    }

    useEffect(()=>{
        const filtered = dest.filter(item => item.name === planet)
        setFilteredPlanet(filtered)
    },[planet])

    return (
        <C.Container background={background}>
            <C.ContentArea>
                <C.TextArea>
                    <p className="subtitle">01 PICK YOUR DESTINATION</p>
                </C.TextArea>
                <C.PlanetArea>
                    <C.PlanetNames>
                        <C.PlanetItem onClick={handleMoon}>
                                MOON
                        </C.PlanetItem>
                        <C.PlanetItem onClick={handleMars}>
                                MARS
                        </C.PlanetItem>
                        <C.PlanetItem onClick={handleEuropa}>
                                EUROPA
                        </C.PlanetItem>
                        <C.PlanetItem onClick={handleTitan}>
                                TITAN
                        </C.PlanetItem>
                    </C.PlanetNames>
                </C.PlanetArea>
                {filteredPlanet &&
                    filteredPlanet.map((item, index) => {
                        return (
                            <PlanetInfo
                                key={index}
                                name={item.name}
                                images={pic}
                                desc={item.description}
                                distance={item.distance}
                                travel={item.travel}
                            />
                        )
                    })
                }
            </C.ContentArea>
        </C.Container>
    )
}