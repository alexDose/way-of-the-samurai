import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../redux/State";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>
    );
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>
    );
    let newMessageBody = props.state.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())

    }

    const onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputButton}>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;