import React from 'react';
import Guestbook from './Guestbook'
import styles from './assets/scss/App.scss';

export default function App() {
    return (
        <div className={'App'}>
            <div>
                <Guestbook />
            </div>
        </div>
    );
}