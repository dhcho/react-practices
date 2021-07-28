import React, { Fragment } from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import list from './data.json';

export default function Guestbook() {
    return (
        <div className={'Guestbook'}>
            <h1>방명록</h1>
            <GuestbookForm />
            <GuestbookList key="Guestbook" lists={list}/>
        </div>
    );
}