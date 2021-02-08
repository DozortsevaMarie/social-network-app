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
		boxShadow: "rgb(0 0 0) 1px 1px 3px 0px",
		transition: "0.2s",
		"&:active": {
			transform: "translateY(2px)",
			boxShadow: "none",
		}
}
const MyPosts = (props) => {
	const [newPost, setNewPost] = useState('');
	const addPost = () => {
		newPost.length > 0 && props.addPostActionCreator(newPost);
		setNewPost('');
	}
	const keyPress = (e) => {
		if(e.keyCode === 13) {
			addPost();
			e.preventDefault();
		}
	}
	const postsElements = props.posts.map(post => <Post key={post.id}
														message={post.message}
														likesCount={post.likesCount}
														id={post.id}/>)
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
						   onKeyDown={keyPress}
						   style={TextFieldStyle}
						   value={newPost}
						   onChange={(e) => setNewPost(e.currentTarget.value)}/>
				<Button variant="contained"
						style={ButtonStyle}
						onClick={addPost}>Add post</Button>
			</form>
			<div>
				{(postsElements.length > 0) ?
					postsElements :
					<div className={style.emptyPage}>You don't have any posts yet
					</div>}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	posts: state.profileReducer.posts,
});

export default connect(mapStateToProps, {addPostActionCreator})(MyPosts);