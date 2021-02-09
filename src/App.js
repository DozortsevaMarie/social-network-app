import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogues from "./components/Dialogues/Dialogues";
import DialoguesItem from "./components/Dialogues/DialoguesItem/DialoguesItem";

function App() {
	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-container">
				<Route path="/profile" component={Profile}/>
				<Route exact path="/dialogues" component={Dialogues}/>
				<Route exact path="/dialogues/:id" component={DialoguesItem}/>
			</div>
		</div>
	);
}

export default App;
