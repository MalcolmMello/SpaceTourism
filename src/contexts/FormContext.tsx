import { createContext, ReactNode, useContext, useReducer } from "react";

interface State {
    currentHeader: number,
    currentPlanet: number,
    currentCrew: number,
    currentTechnology: number
}

interface Action {
    type: FormActions,
    payload: any
}

interface FormProviderProps {
    children: ReactNode
}

interface ContextType {
    state: State,
    dispatch: (action: Action) => void
}


const initialData: State = {
    currentHeader: 0,
    currentPlanet: 0,
    currentCrew: 0,
    currentTechnology: 0
}

//context

const FormContext = createContext<ContextType | undefined>(undefined)

//reducer

export enum FormActions {
    setCurrentHeader,
    setCurrentPlanet,
    setCurrentCrew,
    setCurrentTechnology
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentHeader:
            return {...state, currentHeader: action.payload}
        case FormActions.setCurrentPlanet:
            return {...state, currentPlanet: action.payload}
        case FormActions.setCurrentCrew:
            return {...state, currentCrew: action.payload}
        case FormActions.setCurrentTechnology:
            return {...state, currentTechnology: action.payload}
    }
}

//Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Context Hook

export const useForm = () => {
    const context = useContext(FormContext)
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context
}