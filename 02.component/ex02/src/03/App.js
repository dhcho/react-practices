import React from 'react';
import './assets/css/App.css';

export default function App() {
    const h1Styles = {
        height: 50,
        padding: 5,
        color: '#fff',
        backgroundColor: '#ee9900'
    };
    return (
        <div id='App'>
            <h1 className='Header'>{'Normal CSS (css-loader options{ modules: true })'}</h1>
        </div>
    );
}