import * as C from './styles'
import background from '../../spacets/startercode/assets/homeitems/homeground.jpg'
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const {state, dispatch} = useForm()

    const navigate = useNavigate()

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentHeader,
            payload: 0
        })
    },[])

    const handleDestination = () => {
        navigate('/Destination')
    }
    
    return (
        <C.Container>
            <C.ContentArea>
                <C.TextArea>
                    <p className="subtitle">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p className="text">
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </C.TextArea>
                <C.ExploreArea>
                    <C.Circle onClick={handleDestination}>
                        EXPLORE
                    </C.Circle>
                </C.ExploreArea>
            </C.ContentArea>
        </C.Container>
    )
}