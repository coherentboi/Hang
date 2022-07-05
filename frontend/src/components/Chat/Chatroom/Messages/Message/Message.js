import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const Message = ({ message }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    return(
        //Message
        <div>
            <div>
                {message.message}
            </div>
            <div>
                {moment(message.sentAt).fromNow()}
            </div>
        </div>
    )
}

export default Message