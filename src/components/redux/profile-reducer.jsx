const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0,
                src: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer