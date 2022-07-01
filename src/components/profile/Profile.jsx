import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./posts/MyPosts.jsx";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;