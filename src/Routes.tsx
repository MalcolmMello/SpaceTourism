import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "./Pages/Home"
import { Destination } from "./Pages/Destination"
import { Crew } from "./Pages/Crew"


export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
        </Routes>
    )
}