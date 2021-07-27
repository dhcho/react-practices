import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {
        hours -= 12;
        session = "PM";
    }
    hours = ('0' + hours).slice(-2);

    return (
        <div
        /*
            comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.
        */
       className='clock'
       title='시계'
       props01='hello'
       props02='world'>
        {/* JSX는 HTML이 아니다!!. 이런 <!-- --> 주석은 사용할 수 없다. */}
        // comment 03: JSX 컴포넌트 렌더링 안에서 주석을 사용하면 화면에 그대로 나온다.
        

            {hours} 
            : 
            {minutes} 
            : 
            {seconds}
            {session}
        </div>
    );
}