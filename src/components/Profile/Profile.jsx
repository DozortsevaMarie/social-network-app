import React from "react";
// import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPostsContainer/MyPosts";

const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts />
		</div>
	)
}

export default Profile;