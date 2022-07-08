import React from "react";
import s from "./Users.module.css"

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: "https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc",
            followed: false,
            fullName: "Ivan",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
            {
                id: 2,
                photoUrl: "https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc",
                followed: true,
                fullName: "Alex",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 3,
                photoUrl: "https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc",
                followed: false,
                fullName: "Sveta",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            }])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}