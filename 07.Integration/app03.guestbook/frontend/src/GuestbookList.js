import React from 'react';
import GuestbookItem from './GuestbookListItem';
import styles from './assets/scss/GuestbookList.scss';

export default function GuestbookList({ lists, notifyTask }) {
    return (
        <ul className={ styles.Guestbook__List }>
            { lists.map(list => <GuestbookItem 
                                    key={ list.no } 
                                    name={ list.name }
                                    message={ list.message }
                                    regDate={ list.regDate }
                                    notifyTask={ notifyTask } />) }
        </ul>
    );
}