import * as C from './styles'
import { useEffect, useState } from 'react'
import { Data } from '../../spacets/startercode/data'
import { PlanetItem } from '../../components/PlanetItem'
import background from '../../spacets/startercode/assets/destination/destinationdesktop.jpg'
import MoonPic from '../../spacets/startercode/assets/destination/image-moon.png'
import MarsPic from '../../spacets/startercode/assets/destination/image-mars.png'
import EuropaPic from '../../spacets/startercode/assets/destination/image-europa.png'
import TitanPic from '../../spacets/startercode/assets/destination/image-titan.png'
import { PlanetInfo } from '../../components/PlanetInfo'
import { useForm, FormActions } from '../../contexts/FormContext'

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
    const {state, dispatch} = useForm()

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentHeader,
            payload: 1
        })
    },[])
    
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

        dispatch({
            type: FormActions.setCurrentPlanet,
            payload: 0
        })
    }

    const handleMars = () => {
        setPlanet('Mars')
        setPic(MarsPic)

        dispatch({
            type: FormActions.setCurrentPlanet,
            payload: 1
        })
    }

    const handleEuropa = () => {
        setPlanet('Europa')
        setPic(EuropaPic)

        dispatch({
            type: FormActions.setCurrentPlanet,
            payload: 2
        })
    }

    const handleTitan = () => {
        setPlanet('Titan')
        setPic(TitanPic)

        dispatch({
            type: FormActions.setCurrentPlanet,
            payload: 3
        })
    }

    useEffect(()=>{
        const filtered = dest.filter(item => item.name === planet)
        setFilteredPlanet(filtered)
    },[planet])

    return (
        <C.Container>
            <C.ContentArea>
                <C.TextArea>
                    <p className="subtitle">01 PICK YOUR DESTINATION</p>
                </C.TextArea>
                <C.PlanetArea>
                    <C.PlanetNames>
                        <PlanetItem 
                            planetName="MOON"
                            onClick={handleMoon}
                            active={state.currentPlanet === 0}
                        />
                        <PlanetItem 
                            planetName="MARS"
                            onClick={handleMars}
                            active={state.currentPlanet === 1}
                        />
                        <PlanetItem 
                            planetName="EUROPA"
                            onClick={handleEuropa}
                            active={state.currentPlanet === 2}
                        />
                        <PlanetItem 
                            planetName="TITAN"
                            onClick={handleTitan}
                            active={state.currentPlanet === 3}
                        />
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