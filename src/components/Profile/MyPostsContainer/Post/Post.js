import React from "react";
import style from "./Post.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Avatar from "@material-ui/core/Avatar";

const Post = (props) => {
	return (
		<div className={style.post}>
			<Avatar alt="Avatar" src="/static/images/avatar/3.jpg"/>
			<div className={style.postText}>
				{props.message}
			</div>
			<div className={style.likeButtonContainer}>
				<FormControlLabel
					control={<Checkbox icon={<FavoriteBorder/>}
									   checkedIcon={<Favorite/>}
									   name="checkedH"
									   style={{color: '#FF8CA2'}}
									   />}
				/>
				<span className={style.likesCount}>{props.likesCount}</span>
			</div>
		</div>
	);
}
export default Post;