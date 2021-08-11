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
        } catch(err){
            console.error(err);
        }
    }, []);

    const notifyTask = {
        add: async function(cardNo, taskName){
            try {
                const url = `/api/card/${cardNo}/task`;
                const task = {
                    no: null,
                    name: taskName,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(task)
                });

                if(!response.ok) {
                    throw new Error(`${response.result} ${response.message}`);
                }

                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }

                const cardIndex = cards.findIndex((card) => card.no === cardNo);

                const newCards = update(cards, {
                    [cardIndex]: {
                        tasks: {
                            $push: [json.data]
                        }
                    }
                });

                setCards(newCards);
            } catch(err) {
                console.error(err);
            }
        },
        delete: async function(cardNo, taskNo){
            try {
                const url = `/api/card/${cardNo}/${taskNo}`;

                const response = await fetch(url, {
                    method:'delete'
                });

                if(!response.ok) {
                    throw new Error(`${response.result} ${response.message}`);
                }

                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }

                const cardIndex = cards.findIndex((card) => card.no === cardNo);
                const taskIndex = cards[cardIndex].tasks.findIndex((task) => task.no === taskNo);

                const newCards = update(cards, {
                    [cardIndex]: {
                        tasks: {
                            $splice: [[taskIndex, 1]]
                        }
                    }
                });

                setCards(newCards);
            } catch(err) {
                console.error(err);
            }
        }
    };

    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <GuestbookForm />
            <GuestbookList key="Guestbook" lists={ guestbook }/>
        </div>
    );
}