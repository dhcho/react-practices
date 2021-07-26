import React from 'react';

export default function() {
    /*
        리액트 컴포넌트는 단일 루트노드만 렌더링 할 수 있다.
        오류
        <h2>App02</h2>
        <p>JSX Tutorials - 특징2: Single Root Node</p>
     */
    return (
        <div>
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2: Single Root Node</p>
        </div>
    );
}