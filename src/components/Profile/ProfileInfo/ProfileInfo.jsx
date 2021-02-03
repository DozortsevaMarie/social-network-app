import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<img src="../images/bgcontent.png" alt="mountains" className={style.theme}/>
			<div className={style.ava_container}>
				<img src="../images/avatar.jpg" alt="avatar" className={style.avatar}/>
			</div>
		</div>
	)
}

export default ProfileInfo;