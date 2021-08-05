import React, { Component, useState } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            color: null
        }
        console.log('[MOUNT01]: constructor');
    }

    /**
     * props로 받아온 값을 state에 동기화한다.[react V16.3]
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProps(${nextProps}, ${prevState})`);
        return nextProps.color !== prevState.color ? {color: nextProps.color} : null
    }

    render() {
        console.log(`[MOUNT03][UPDATE03]: render()`);
        return (
            <h3 style={ {
                width: 300,
                height: 50,
                backgroundColor: this.state.color
            } }/>
        )
    }

    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
     * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는 이벤트 등록
     * 1. 이벤트 등록
     * 2. 타이머 설정
     * 3. 네트워크 통신
     * 등을 할 수 있다.
     */
    componentDidMount() {
        console.log(`[MOUNT04]: componentDidMount()`);
    }
}