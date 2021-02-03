import React from "react";
import style from "./Header.module.css";
import {Button} from "@material-ui/core";

const loginButtonStyle = {
		color: 'cornflowerblue',
		border: '1px solid cornflowerblue'
	}


const Header = () => {
	return (
		<header className={style.header}>
			<img src="../images/logo.png" alt="logo"/>
			<div className={style.loginBlock}>
				<Button variant="outlined" style={loginButtonStyle} >Login</Button>
			</div>
		</header>
	)
}

export default Header;