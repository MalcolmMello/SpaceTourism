import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Data } from "./spacets/startercode/data"
import { Home } from "./Pages/Home"


export default () => {
	const [data, setData] = useState([Data])
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}