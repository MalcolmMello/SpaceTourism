import * as C from './styles'
import { useState, useEffect } from 'react'
import { CrewInfo } from '../../components/CrewInfo'
import { CrewItem } from '../../components/CrewItem'
import { Data } from '../../spacets/startercode/data'
import background from '../../spacets/startercode/assets/crew/backgroundcrewdesktop.jpg'
import DouglasPic from '../../spacets/startercode/assets/crew/image-douglas-hurley.png'
import MarkPic from '../../spacets/startercode/assets/crew/image-mark-shuttleworth.png'
import VictorPic from '../../spacets/startercode/assets/crew/image-victor-glover.png'
import AnoushehPic from '../../spacets/startercode/assets/crew/image-anousheh-ansari.png'
import { useForm, FormActions } from '../../contexts/FormContext'

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
    const {state, dispatch} = useForm()

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentHeader,
            payload: 2
        })
    },[])

    const [data, setData] = useState([Data]);

    const [team, setTeam] = useState<Crew[]>([])

    const [filteredCrew, setFilteredCrew] = useState<Crew[]>([])

    const [coach, setCoach] = useState('')

    const [pic, setPic] = useState(DouglasPic)
    
    
    useEffect(()=>{
        data.map((item)=>{
            const crew = item.crew
            setTeam(crew)
        })
        setCoach('Douglas Hurley')
    },[])

    const handleDouglas = () => {
        setCoach('Douglas Hurley');
        setPic(DouglasPic);

        dispatch({
            type: FormActions.setCurrentCrew,
            payload: 0
        })
    }

    const handleMark = () => {
        setCoach('Mark Shuttleworth')
        setPic(MarkPic)

        dispatch({
            type: FormActions.setCurrentCrew,
            payload: 1
        })
    }

    const handleVictor = () => {
        setCoach('Victor Glover')
        setPic(VictorPic)

        dispatch({
            type: FormActions.setCurrentCrew,
            payload: 2
        })
    }

    const handleAnousheh = () => {
        setCoach('Anousheh Ansari')
        setPic(AnoushehPic)

        dispatch({
            type: FormActions.setCurrentCrew,
            payload: 3
        })
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
                <C.PicAreaPhone>
                    <img src={pic}/>
                </C.PicAreaPhone>
                <C.CrewArea>
                    <C.CrewNamePhone>
                            <CrewItem
                                onClick={handleDouglas}
                                active={state.currentCrew === 0}
                            />

                            <CrewItem
                                onClick={handleMark}
                                active={state.currentCrew === 1}
                            />
                            
                            <CrewItem
                                onClick={handleVictor}
                                active={state.currentCrew === 2}
                            />
                            <CrewItem
                                onClick={handleAnousheh}
                                active={state.currentCrew === 3}
                            />
                    </C.CrewNamePhone>
                </C.CrewArea>
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
                        <CrewItem
                            onClick={handleDouglas}
                            active={state.currentCrew === 0}
                        />

                        <CrewItem
                            onClick={handleMark}
                            active={state.currentCrew === 1}
                        />
                        
                        <CrewItem
                            onClick={handleVictor}
                            active={state.currentCrew === 2}
                        />
                        <CrewItem
                            onClick={handleAnousheh}
                            active={state.currentCrew === 3}
                        />
                    </C.CrewName>
                </C.CrewArea>
            </C.ContentArea>
            <C.PicArea>
                <img src={pic}/>
            </C.PicArea>
        </C.Container>
    )
}