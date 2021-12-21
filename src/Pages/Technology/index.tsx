import * as C from './styles'
import { useState, useEffect } from 'react';
import background from '../../spacets/startercode/assets/technology/background-technology-desktop.jpg'
import { TechInfo } from '../../components/TechInfo';
import { Data } from '../../spacets/startercode/data'
import LaunchPic from '../../spacets/startercode/assets/technology/image-launch-vehicle-portrait.jpg'
import SpaceportPic from '../../spacets/startercode/assets/technology/image-space-capsule-portrait.jpg'
import SpaceCapsule from '../../spacets/startercode/assets/technology/image-spaceport-portrait.jpg'

interface Tech { 
    name: string; 
    images: { 
        portrait: string;
        landscape: string; 
    };
    description: string; 
}

export const Technology = () => {
    const [data, setData] = useState([Data]);

    const [techy, setTechy] = useState<Tech[]>([])

    const [filteredTech, setFilteredTech] = useState<Tech[]>([])

    const [vehicle, setVehicle] = useState('')

    const [pic, setPic] = useState(LaunchPic)
    
    
    useEffect(()=>{
        data.map((item)=>{
            const tech = item.technology
            setTechy(tech)
        })
        setVehicle('Launch vehicle')
    },[])

    const handleLaunch = () => {
        setVehicle('Launch vehicle')
        setPic(LaunchPic)
    }

    const handleSpaceport = () => {
        setVehicle('Spaceport')
        setPic(SpaceportPic)
    }

    const handleCapsule = () => {
        setVehicle('Space capsule')
        setPic(SpaceCapsule)
    }

    useEffect(()=>{
        const filtered = techy.filter(item => item.name === vehicle)
        setFilteredTech(filtered)
    },[vehicle])

    return (
        <C.Container background={background}>
            <C.ContentArea>
                <C.TextArea>
                    <p className="subtitle">03 SPACE LAUNCH 101</p>
                </C.TextArea>
                <C.TechnologyArea>
                    <C.StepArea>
                        <C.Step onClick={handleLaunch}>1</C.Step>
                        <C.Step onClick={handleSpaceport}>2</C.Step>
                        <C.Step onClick={handleCapsule}>3</C.Step>
                    </C.StepArea>
                    {filteredTech &&
                        filteredTech.map((item, index)=>{
                            return (
                                <TechInfo
                                    key={index}
                                    name={item.name}
                                    desc={item.description}
                                />
                            )
                        })
                    }
                    
                </C.TechnologyArea>
            </C.ContentArea>
            <C.ImageArea>
                <img src={pic} />
            </C.ImageArea>
        </C.Container>
    )
}