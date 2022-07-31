import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from 'pages/About';
import Works from 'pages/Works';
import Teams from 'pages/Teams';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/works" element={<Works />} />
					<Route path="/teams" element={<Teams />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
