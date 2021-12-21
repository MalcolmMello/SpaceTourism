import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header"
import Routes from "./Routes";
import { FormProvider } from './contexts/FormContext'

function App() {
	return (
		<FormProvider>
			<Router>
				<Header />
				<Routes />
			</Router>
		</FormProvider>
	);
}

export default App;