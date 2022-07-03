import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./posts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;