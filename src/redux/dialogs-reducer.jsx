const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return  {...state, newMessageBody: "", messages: [...state.messages, {id: 4, message: body}]}
        case UPDATE_NEW_MESSAGE_BODY:
            return  {...state, newMessageBody: action.body}
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer