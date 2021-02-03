import React, {useState} from "react";
import style from "./MyPosts.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import Post from "./Post/Post";

const TextFieldStyle = {
	backgroundColor: "#fff",
}
const ButtonStyle = {
	width: "8rem",
	height: "2rem",
	color: "#fff",
	backgroundColor: "cornflowerblue",
	boxShadow: "rgb(0 0 0) 1px 1px 3px 0px"
}
const MyPosts = (props) => {
	debugger
	const [newPost, setNewPost] = useState('');
	const addPost = () => {
		props.addPostActionCreator(newPost);
		setNewPost('');
	}


	return (
		<div>
			<h3 className={style.myPosts}>My posts</h3>
			<form noValidate
				  autoComplete="off"
				  className={style.typingArea}>
				<TextField id="outlined-basic"
						   label="Type a new post"
						   variant="outlined"
						   fullWidth={true}
						   style={TextFieldStyle}
						   value={newPost}
						   onChange={(e) => setNewPost(e.currentTarget.value)}/>
				<Button variant="contained"
						style={ButtonStyle}
						onClick={addPost}>Add post</Button>
			</form>
			<div>
				<Post/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	posts: state.profileReducer.posts,
});

export default connect(mapStateToProps, {addPostActionCreator})(MyPosts);