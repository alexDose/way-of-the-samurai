const SEND_MESSAGE = "SEND-MESSAGE"

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return  {...state, messages: [...state.messages, {id: 4, message: body}]}
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer