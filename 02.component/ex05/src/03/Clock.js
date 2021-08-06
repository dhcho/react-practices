import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    render() {
        return (
            <div className="Clock">
                <div className="numbers">
                    <p>10</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>20</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>45</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={ 'on'   }>am</p>
                    </div>
                    <div>
                        <p className={ 'off' }>pm</p>
                    </div>
                </div>
            </div>
        );
    }
}