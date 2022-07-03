import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}