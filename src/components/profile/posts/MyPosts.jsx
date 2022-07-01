import React from "react";
import Post from "./Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post src={p.src} message={p.message} like={p.like}/>
    );

    let newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;