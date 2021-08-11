import React, { useState, useEffect } from 'react';
import update from 'react-addons-update';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import list from './assets/json/data.json';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    const [guestbook, setGuestbook] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/index', {
                method:'get',
                headers:{ 'Content-Type': 'application/json' }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setGuestbook(json.data);
            console.log(json.data);
        } catch(err){
            console.error(err);
        }
    }, []);

    const notifyTask = {
        add: async function(name, password, content){
            try {
                const url = `/api/add`;
                const guestbook = {
                    no: null,
                    name: name,
                    password: password,
                    content: content
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(guestbook)
                });

                if(!response.ok) {
                    throw new Error(`${response.result} ${response.message}`);
                }

                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }
            } catch(err) {
                console.error(err);
            }
        },
        delete: async function(no, password){
            try {
                const url = `/api/delete`;
                const guestbook = {
                    no: no,
                    password: password
                }

                console.log(guestbook);
                console.log("TEST");

                const response = await fetch(url, {
                    method:'delete',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(guestbook)
                });

                if(!response.ok) {
                    throw new Error(`${response.result} ${response.message}`);
                }

                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }
            } catch(err) {
                console.error(err);
            }
        }
    };

    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <GuestbookForm notifyTask={ notifyTask } />
            <GuestbookList 
                key="Guestbook" 
                lists={ guestbook }
                notifyTask={ notifyTask } />
        </div>
    );
}