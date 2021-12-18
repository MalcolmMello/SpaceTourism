import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "./Pages/Home"
import { Destination } from "./Pages/Destination"


export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
        </Routes>
    )
}