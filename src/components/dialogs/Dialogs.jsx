import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>
    );
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputButton}>
                    <input type="text"/>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;