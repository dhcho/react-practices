## Class Component LifeCycle
1.  Mount LifeCycle
    - constructor
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react V16.3]
    - render
    - * componentDidMount: 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
2.  Update LifeCycle
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다.[react V16.3]
    - shouldComponentUpdate: state가 변경되었을 때, 렌더링 여부를 결정한다.(최적화)
    - render
    - getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출[react V16.3]
    - ComponentDidUpdate: DOM 업데이트가 끝난 직후, DOM 작업이 가능하다.
3.  Unmount LifeCycle
    - ComponentWillUnmount: 컴포넌트를 DOM에서 제거할 때 componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리멘트등을 제거(Clean-Up) 작업을 한다.

## Function Component LifeCycle
1.  대체(Alternative) <- 