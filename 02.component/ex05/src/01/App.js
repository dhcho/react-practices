import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function () {
    const [color, setColor] = useState('#000');

    const handleClick = function() {
        // '#998811'
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }

    return (
        <Fragment>
            <h2>ex05: Component LifeCycle</h2>
            <button onClick={ handleClick }>색상변경</button>
            <br/>
            <LifeCycle color={ color } />
            </Fragment>
    );
}