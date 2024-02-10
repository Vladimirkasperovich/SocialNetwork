import styles from "./users.module.css"
import {v1} from "uuid";
import axios from "axios";
import {RootObjectItems} from "../../Redux/users-reducer";
import React, {useEffect} from "react";
import usePhoto from "../../assets/images/users-vector-icon-png_260862.jpg"


export type UserType = {
    users: Array<RootObjectItems>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: any) => void

}


export class Users extends React.Component<any, any> {
     getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                .then(data => {
                    this.props.setUsers(data.data.items)
                })

        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map((u: any) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : usePhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {
                        u.followed ?
                            <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                    }

                </div>
            </span>
                        <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                      <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
                    </div>
                )
            }</div>
    }
}