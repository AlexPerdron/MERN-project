// import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

import Header from "./components/Header/index.js";
import SideBar from "./components/SideBar/index.js";
import HomePage from "./pages/HomePage/HomePage.js";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="App">
					<SideBar />
					<HomePage />
				</div>
			</div>
		);
	}
}
export default App;
