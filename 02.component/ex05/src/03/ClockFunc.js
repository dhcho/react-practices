import React, { useEffect, useState } from 'react';
import './assets/scss/Clock.scss';

export default function Clock(props) {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [session, setSession] = useState('am');
    let count = 0;
    let interval;

    useEffect(()=> {
        interval = setInterval(function() {
            if(++count == 10) {
                props.callback();
            }
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();


            setHours(`0${hours === 0 ? 12 : hours > 12 ? hours - 12 : hours }`.slice(-2));
            setMinutes(`0${minutes}`.slice(-2));
            setSeconds(`0${seconds}`.slice(-2));
            setSession(hours > 12 ? 'pm' : 'am');
        }, 1000);

        return (function(){
            console.log('Click', 'componentWillUnmount() callback')
            clearInterval(interval);
        });
    })

        return (
            <div className="Clock">
                <div className="numbers">
                    <p>{ hours }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{ minutes }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{ seconds }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={ session === 'am' ? 'on' : 'off' }>am</p>
                    </div>
                    <div>
                        <p className={ session === 'pm' ? 'on' : 'off' }>pm</p>
                    </div>
                </div>
            </div>
        );
}