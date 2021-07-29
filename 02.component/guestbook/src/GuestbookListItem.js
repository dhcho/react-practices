import React from 'react';
import styles from './assets/css/GuestbookListItem.css';

export default function GuestbookItem({ no, name, message, regDate }) {
    return (
        <li className={ styles.Guestbook__List__Item }>
            <strong>{ name }</strong>
            <p>
                { message }
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>
    );
}