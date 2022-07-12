import React from "react";
import Post from "./Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";

 let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post key={p.like} src={p.src} message={p.message} like={p.like}/>
    );

    let newPostElement = React.createRef()

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;