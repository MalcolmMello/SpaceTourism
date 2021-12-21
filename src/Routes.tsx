import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "./Pages/Home"
import { Destination } from "./Pages/Destination"
import { Crew } from "./Pages/Crew"
import { Technology } from "./Pages/Technology"


export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
        </Routes>
    )
}