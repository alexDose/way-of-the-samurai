import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState =  {
    posts: [
        {
            id: 1,
            message: "Hello, my friends",
            like: 14,
            src: "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw"
        },
        {
            id: 2,
            message: "I like props",
            like: 21,
            src: "https://www.metagaming.com/wp-content/uploads/2022/04/BAYC-PFP-NFT.png"
        },
        {
            id: 3,
            message: "Web developer it's my life",
            like: 3,
            src: "https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp"
        }
    ],
    newPostText: "kamasutra",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return  {...state, newPostText: action.newText}

        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0,
                src: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            }
            return  {...state, posts: [...state.posts, newPost], newPostText: ""}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
        }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })

}


export default profileReducer