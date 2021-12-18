import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { Data } from "./spacets/startercode/data"
import { Header } from "./components/Header"
import { Home } from './Pages/Home'
import Routes from "./Routes";

function App() {
	const [data, setData] = useState([Data])

	return (
		<Router>
			<Header />
			<Routes data={data}/>
		</Router>
	);
}

export default App;