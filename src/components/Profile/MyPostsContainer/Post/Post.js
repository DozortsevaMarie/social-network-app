import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={style.post}>
			<img className={style.photo} src="../../../.././images/photo.jpg" alt="photo"/>
			<div className={style.postText}>

			</div>
			<div className={style.btnContainer}>
				<button className={style.btn}>
					<img src="../../../.././images/heart-button.svg" alt="like"/>
				</button>
				<span className={style.likeCount}>0</span>
			</div>
		</div>
	);
}
export default Post;