import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}