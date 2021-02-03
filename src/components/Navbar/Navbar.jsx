import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<ul>
				<li><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></li>
				<li><NavLink to="/dialogues" activeClassName={style.activeLink}>Messages</NavLink></li>
				<li><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></li>
				<li><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></li>
				<li><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></li>
				<li><NavLink to="/users" activeClassName={style.activeLink}>New Users</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;