import React, {useRef} from 'react';
import Guestbook from './Guestbook'
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const notifyTask = {
        paging: async function(no){
            try {
                const url = `/api/searchIndex/${no}`;

                const response = await fetch(url, {
                    method:'get'
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
        }
    };

    return (
        <div
            ref={ outterRef }
            className={'App'}
            onScroll={ e => {
                if(outterRef.current.scrollTop + outterRef.current.clientHeight + 20 > innerRef.current.clientHeight){
                    console.log("Fetch!!!");
                }
            } }>
            <div
                ref={ innerRef }>
                <Guestbook />
            </div>
        </div>
    );
}