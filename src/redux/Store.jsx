import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export let store = {
    _state: {
        profilePage: {
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
            newPostText: "kamasutra"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ivan"},
                {id: 2, name: "Petya"},
                {id: 3, name: "Roma"},
                {id: 4, name: "Katya"},
                {id: 5, name: "Ira"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Hey"}
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("hey")
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

