import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;