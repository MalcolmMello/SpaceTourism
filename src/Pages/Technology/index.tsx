import * as C from './styles'
import { useState, useEffect } from 'react';
import background from '../../spacets/startercode/assets/technology/background-technology-desktop.jpg'
import { TechInfo } from '../../components/TechInfo';
import { Data } from '../../spacets/startercode/data'
import { Step } from '../../components/Step';
import LaunchPic from '../../spacets/startercode/assets/technology/image-launch-vehicle-portrait.jpg'
import LaunchPicPhone from '../../spacets/startercode/assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceportPic from '../../spacets/startercode/assets/technology/image-space-capsule-portrait.jpg'
import SpaceportPicPhone from '../../spacets/startercode/assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapsule from '../../spacets/startercode/assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsulePhone from '../../spacets/startercode/assets/technology/image-spaceport-landscape.jpg'
import { useForm, FormActions } from '../../contexts/FormContext'

interface Tech { 
    name: string; 
    images: { 
        portrait: string;
        landscape: string; 
    };
    description: string; 
}

export const Technology = () => {
    const {state, dispatch} = useForm()

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentHeader,
            payload: 3
        })
    },[])

    const [data, setData] = useState([Data]);

    const [techy, setTechy] = useState<Tech[]>([])

    const [filteredTech, setFilteredTech] = useState<Tech[]>([])

    const [vehicle, setVehicle] = useState('')

    const [pic, setPic] = useState(LaunchPic)

    const [picPhone, setPicPhone] = useState(LaunchPicPhone)
    
    
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
        setPicPhone(LaunchPicPhone)

        dispatch({
            type: FormActions.setCurrentTechnology,
            payload: 0
        })
    }

    const handleSpaceport = () => {
        setVehicle('Spaceport')
        setPic(SpaceportPic)
        setPicPhone(SpaceportPicPhone)

        dispatch({
            type: FormActions.setCurrentTechnology,
            payload: 1
        })
    }

    const handleCapsule = () => {
        setVehicle('Space capsule')
        setPic(SpaceCapsule)
        setPicPhone(SpaceCapsulePhone)

        dispatch({
            type: FormActions.setCurrentTechnology,
            payload: 2
        })
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
                <C.ImagePhone>
                    <img src={picPhone}/>
                </C.ImagePhone>
                <C.TechnologyArea>
                    <C.StepArea>
                        <Step
                            onClick={handleLaunch}
                            step="1"
                            active={state.currentTechnology === 0}
                        />
                        <Step
                            onClick={handleSpaceport}
                            step="2"
                            active={state.currentTechnology === 1}
                        />
                        <Step
                            onClick={handleCapsule}
                            step="3"
                            active={state.currentTechnology === 2}
                        />
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