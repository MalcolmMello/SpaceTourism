import * as C from './styles'
import { useState, useEffect } from 'react'
import { CrewInfo } from '../../components/CrewInfo'
import { Data } from '../../spacets/startercode/data'
import background from '../../spacets/startercode/assets/crew/backgroundcrewdesktop.jpg'
import DouglasPic from '../../spacets/startercode/assets/crew/image-douglas-hurley.png'
import MarkPic from '../../spacets/startercode/assets/crew/image-mark-shuttleworth.png'
import VictorPic from '../../spacets/startercode/assets/crew/image-victor-glover.png'
import AnoushehPic from '../../spacets/startercode/assets/crew/image-anousheh-ansari.png'

interface Crew { 
    name: string; 
    images: { 
        png: string;
        webp: string; 
    };
    role: string; 
    bio: string;
}

export const Crew = () => {
    const [data, setData] = useState([Data]);

    const [team, setTeam] = useState<Crew[]>([])

    const [filteredCrew, setFilteredCrew] = useState<Crew[]>([])

    const [coach, setCoach] = useState('')

    const [pic, setPic] = useState(DouglasPic)
    
    
    useEffect(()=>{
        data.map((item)=>{
            const crew = item.crew
            setTeam(crew)
            console.log(team)
        })
        setCoach('Douglas Hurley')
    },[])

    const handleDouglas = () => {
        setCoach('Douglas Hurley')
        setPic(DouglasPic)
    }

    const handleMark = () => {
        setCoach('Mark Shuttleworth')
        setPic(MarkPic)
    }

    const handleVictor = () => {
        setCoach('Victor Glover')
        setPic(VictorPic)
    }

    const handleAnousheh = () => {
        setCoach('Anousheh Ansari')
        setPic(AnoushehPic)
    }

    useEffect(()=>{
        const filtered = team.filter(item => item.name === coach)
        setFilteredCrew(filtered)
    },[coach])

    return (
        <C.Container background={background}>
            <C.ContentArea>
                <C.TextArea>
                    <p className="subtitle">02 MEET YOUR CREW</p>
                </C.TextArea>
                <C.CrewData>
                    {filteredCrew &&
                        filteredCrew.map((item, index) => {
                            return (
                                    <CrewInfo
                                        key={index}
                                        name={item.name}
                                        bio={item.bio}
                                        role={item.role}
                                    />
                            )
                        })
                    }
                </C.CrewData>
                <C.CrewArea>
                    <C.CrewName>
                        <C.CrewItem onClick={handleDouglas}></C.CrewItem>
                        
                        <C.CrewItem onClick={handleMark}></C.CrewItem>
                        
                        <C.CrewItem onClick={handleVictor}></C.CrewItem>
                        
                        <C.CrewItem onClick={handleAnousheh}></C.CrewItem>
                    </C.CrewName>
                </C.CrewArea>
            </C.ContentArea>
            <C.PicArea>
                <img src={pic}/>
            </C.PicArea>
        </C.Container>
    )
}