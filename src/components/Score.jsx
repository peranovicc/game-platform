import React, { useState, useEffect } from 'react';
import { getUsername } from '../util/coetus-service';

const Score = ({score, userID}) => {
    const [user,setUser] = useState('')

    useEffect(() => {
        getUsername(userID)
        .then(data => {
            if(data.success === false){
                return
            }
            setUser(data.user.username)
        })},[userID])

    return (
        <li>{score} {user}</li>
    )
}

export default Score