import React from "react";
import {Button, List} from "@material-ui/core";
import {connect} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from '@material-ui/icons/Delete';
import style from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";


const Dialogues = (props) => {
	return (
		<List dense>
			<h3 className={style.title}>All dialogues</h3>
			{props.dialogues.map(dialogue => {
				return (
					<ListItem key={dialogue.id}
							  divider
							  button
							  style={{height: "70px"}}>
						<NavLink to={`/dialogues/${dialogue.id}`} className={style.link}>
							<ListItemAvatar>
								<Avatar
									alt={`${dialogue.name}`}
									src={`/static/images/avatar/${dialogue.id + 1}.jpg`}
								/>
							</ListItemAvatar>
							<ListItemText primary={`${dialogue.name}`}/>
						</NavLink>
						<ListItemSecondaryAction>
							<Button style={{color: "#BDBDBD"}}>
								<DeleteIcon/>
							</Button>
						</ListItemSecondaryAction>
					</ListItem>
				)
			})
			}
		</List>
	)
}

const mapStateToProps = (state) => ({
	dialogues: state.dialoguesReducer.dialogues,
	messages: state.dialoguesReducer.messages,
})

export default connect(mapStateToProps)(Dialogues);