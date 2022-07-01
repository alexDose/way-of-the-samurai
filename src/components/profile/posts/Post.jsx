import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.item}>
            <div>
                <img src={props.src}/>
                <text>{props.message}</text>
            </div>
            <div>
                <span>like: {props.like}</span>
            </div>
        </div>
    );
}
export default Post;