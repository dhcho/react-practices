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
    - componentDidUpdate: DOM 업데이트가 끝난 직후, DOM 작업이 가능하다.

3.  Unmount LifeCycle
    - componentWillUnmount: 컴포넌트를 DOM에서 사라질 때

4.  예제: src/01

## Function Component LifeCycle: Hook 함수
1.  Alternative 1: getDerivedStateFromProps
2.  After Rendering 함수(상태에 변화 -> 렌더링 -> 함수)
3.  어떤 특정 상태의 변화에 반응하는 After Rendering 함수 (어떤 특정 상태값이 변화 -> 렌더링 -> 함수)
4.  Alternative 2: componentDidMound & componentWillUnmount


## Convert-react-class-to-function-component
ref #1 - https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component
ref #2 - https://velog.io/@lemon-ginger/Class-Component%EC%97%90%EC%84%9C-Function-Component%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0

1. Class에서 Function으로 바꾸세요
From

class MyComponent extends React.Component{
	//...
}
to

function MyComponent(props) {
	//...
}
2. render 메소드를 지우세요
render 메소드를 지우고 return을 포함한 모든것들을 유지시키세요
그리고 function Component의 마지막에 두세요

From

render() {
	return (<p>Hello, world</p>);
}
to

function MyComponent(props){
	return (<p>Hello, world</p>);
}//end of function
3. 모든 메소드를 function으로 변환시키세요.
Class 메소드들은 function 안에서 전혀 작동하지 않습니다.
그러니까 모두 functions로 변환시키세요!

From

class MyComponent extends React.Component{
  onClickHandler(e){
  	//...
  }
}
to

function MyComponent{
	const onClickHandler=(e)=> {
    	//...
    }
}
4. this로 참조한것들을 지우세요
this들은 더이상 function 안에서 유용하지 않을거에요.
렌더와 function들 안에서 this들을 모두 지우세요.

From

class MyComponent(props) extends React.Component{
	//...
  mySpecialFunction(){
  	console.log('you clicked the button!');
  }
  
  onClickHandler(e){
  	this.mySpecialFunction();
  }
  
  render(){
  	return(
    	<div>
      		<p> Hello, {this.props.name}</p>
      		<button onClick={this.onClickHandler}> Click! </button>
      	</div>
    )
  }
}
To

function MyComponent(props){
	//...
  const mySpectialFunction = () => {
  	console.log('you clicked the button!');
  }

  const onClickHandler=(e) => {
  	mySpecialFunction();
  }
  
  return (
    	<div>
      		<p> Hello, {props.name}</p>
      		<button onClick={onClickHandler}> Click! </button>
      	</div>
  );

}
5. constructor를 지우세요!
constructor를 지우는것은 약간 까다롭기 때문에 더 상세하게 설명할게요.

useState
Instead of

constructor(props){
  super(props);
  //Set Initial state
  this.state = {
  	counter:0,
    name: ""
  }
}
useState Hook을 대신 사용하세요!

function MyComponent(props) {
	const [counter,setCounter] = useState(0);
  	const [name,setName] = useState("");
}
event handler로 바인딩된것들을 지우세요
우리는 더이상 function Component에서 event Handler를 바인딩할 필요가 없어요.
constructor(props){
	this.onClickHandler = this.onclickHandler.bind(this);
}
우리는 간단하게 이 줄을 지울 수 있습니다

6. this.setState를 대체하자
이제 this.setState는 명확하게 우리의 function Component에 존재할 필요가 없어요! 우리는 대신에 setter라고 불리는 걸로 다 대체할거에요!

이것들을 대체하세요

class MyComponent extends React.Component{
	onClickHandler(e){
    	this.setState({count:this.state.count+1})
    }
}
이걸로 대체하세요!

function MyComponet{
	const [count,setCount] = useState(0);
  	const onClickHandler = e => {
    	setCount(count+1);
    }
}
7. 상태 업데이트를 위한 useEffect
state가 업데이트 된 후에 실행되던 callback을
어떻게 this.setState가 받는지 기억해?
useState의 업데이터 함수는 그런게 아니라
대신에 우리는 useEffect hook을 사용해야만 합니다.
useEffect는 그 자신의 dependencies들이 변화가 있을때마다 trigger가 될것입니다.

만약에 당신이 이렇게 했었다면

this.setState({counter: this.state.counter+1}, () => {
  console.log('Counter was updated!')
})
대신 이렇게 바꾸세요

	const [counter,setCounter] = useState(0);
	
	useEffect(()=>{
    	console.log('counter changed!');
    },[counter])
8. lifecycle 메소드들을 hook으로 교체하세요.
ComponentDidMount
componentDidMount메소를 사용하는대신에
빈 dependency배열을 쓰는 useEffect hook을 사용하세요!

useEffect(()=>{
	console.log('component mounted!')
},[]) //비어있는 배열이 있다는것을 알려줘야함!
ComponentWillUnmount
리액트 트리에서 컴포넌트를 지우기전에 clean up하기 위해서
componentWillUnmount메소드를 사용하는 대신에
빈 배열에 의존하는 useEffect hook을 사용하는 function을 리턴해줍니다.

useEffect(()=>{
	console.log('component mounted');
  //return a function to execute at unmount
  return ()=>{
  	console.log('component will unmount')
  }
},[]) //빈배열을 선언하세요!
ComponentDidUpdate
만약에 당신이 useEffect에서 두번째 인자로 아무것도 전달하지 않는다면
컴포넌트가 업데이트 될때마다 트리거가 될것이다.
그러니까 componentDidUpdate를 사용하는것 대신에 아래에 나오는것을 사용하세요.

useEffect(()=>{
	console.log('component updated!');
}) // 두번째 인자로 아무것도 없다고 표시하기!