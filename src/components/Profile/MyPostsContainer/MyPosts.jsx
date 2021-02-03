import React from "react";
import style from "./MyPosts.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TextFieldStyle = {
	backgroundColor: "#fff",
}
const ButtonStyle = {
	width: "6rem",
	height: "2rem",
	color: "#fff",
	backgroundColor: "cornflowerblue",
	boxShadow: "rgb(0 0 0) 1px 1px 3px 0px"
}
const MyPosts = () => {
	return (
		<div>
			<div className={style.myPosts}>My posts</div>
			<div >
				<form  noValidate autoComplete="off" className={style.typingArea}>
					<TextField id="outlined-basic" label="Type a new post" variant="outlined" fullWidth={true} style={TextFieldStyle} />
					<Button variant="contained" style={ButtonStyle}>Send</Button>
				</form>
			</div>
		</div>
	)
}

export default MyPosts;