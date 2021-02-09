import React from "react";
import {Avatar} from "@material-ui/core";
import {connect} from "react-redux";
import {useParams} from "react-router";
import style from "./DialoguesItem.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const DialoguesItem = (props) => {
	const ButtonStyle = {
		width: "8rem",
		height: "2rem",
		color: "#fff",
		backgroundColor: "cornflowerblue",
		boxShadow: "rgb(0 0 0) 1px 1px 3px 0px",
		transition: "0.2s",
		"&:active": {
			transform: "translateY(2px)",
			boxShadow: "none",
		}
	}
	const {id} = useParams();
	const person = props.dialogues.find(item => item.id === id);
	const messages = [...props.messages.filter(item => item.author === person.name)];
	return (
		<div>
			<div className={style.header}>
				<Avatar/>
				<span>{person.name}</span>
			</div>
			<div className={style.container}>
				{messages.map(item => <div key={item.id} className={style.messageBlock}>
					<Avatar/>
					<div className={style.message}>{item.message}</div>
				</div>)}
			</div>
			<form noValidate
				  autoComplete="off"
				  className={style.typingArea}>
				<TextField id="outlined-basic"
						   label="Type a new message"
						   variant="outlined"
						   fullWidth={true}
						   multiline
				/>
				<Button variant="contained"
						style={ButtonStyle}
				>Send</Button>
			</form>
		</div>
	)
}
const mapStateToProps = (state) => ({
	dialogues: state.dialoguesReducer.dialogues,
	messages: state.dialoguesReducer.messages,
})


export default connect(mapStateToProps)(DialoguesItem);