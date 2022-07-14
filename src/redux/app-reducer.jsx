import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SECCESS = "INITIALIZED_SECCESS"

let initialState = {
initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SECCESS:
            return {...state, initialized: true}

        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SECCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer