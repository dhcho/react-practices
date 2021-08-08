import React, { useState } from 'react';
import './assets/scss/App.scss'
import Clock from './ClockFunc';

export default function App() {
    const [showClock, setShowClock] = useState(true);

    function hideClock() {
        setShowClock(true);
    }

        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    showClock ?
                        <Clock callback={() => hideClock() }/> :
                        null
                }
        </div>
        );
}