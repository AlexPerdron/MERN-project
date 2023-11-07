// import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PostsPage from "./pages/PostsPage/PostsPage.js";
import Header from "./components/Header/index.js";

import { Component } from "react";
import SideBar from "./components/SideBar/index.js";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="App">
					<SideBar />
					<PostsPage />
				</div>
			</div>
		);
	}
}
export default App;
