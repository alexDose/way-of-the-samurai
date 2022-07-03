import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                const onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}