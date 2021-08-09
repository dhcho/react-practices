## React Practices

### 1.  기본개념(Basics)
### 2.  컴포넌트(Component)
### 3.  라우팅(Routing)
### 4.  Flux: Redux
### 5.  Testing(rest)
### 6.  Performance
### 7.  Integration

### Kanban App
### Emaillist App
### Guestbook App    [과제] state & props / 통신
### Gallery App      [과제]
### Scheduler App    [프로젝트 프로토타입]


## 📦 What is Webpack?
* 웹팩은 모듈 번들러(Module Bundler)입니다. 코딩할 때 편의를 위해 여러 개의 모듈로 나눠서 작업하는 경우가 많습니다. 하지만 브라우저에서 파일 단위 모듈 시스템을 이용하는 것은 많은 네트워크 비용 낭비를 유발할 수 있습니다. 이러한 문제 때문에 여러 개의 모듈을 하나의 파일로 묶어서 보낼 모듈 번들러가 필요합니다. 여기서 웹팩이 등장합니다. 웹팩에서는 자바스크립트, 스타일시트, 이미지 등 모든 것을 모듈로 봅니다. 이런 웹팩에는 중요한 속성이 4가지 있습니다.

1. Entry:
    entry 는 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점 이자 자바스크립트 파일 경로 입니다. 웹팩은 entry 를 통해서 모듈을 로딩하고 하나의 파일로 묶습니다.
2. Output:
    웹팩에서 entry 로 찾은 모듈을 하나로 묶은 결과물을 반환할 위치입니다.
3. Loader:
    웹팩은 기본적으로 자바스크립트와 JSON 만 빌드할 수 있습니다. 자바스크립트가 아닌 다른 자원 (HTML, CSS, Image)를 빌드할 수 있도록 도와주는 속성입니다.
4. Plugin:
    plugin 은 웹팩의 기본적인 동작 외 추가적인 기능을 제공하는 속성입니다. loader 는 파일을 해석하고 변환하는 과정에 관여하고, plugin 은 결과물의 형태를 바꾸는 역할을 합니다.

## 🔍 About Babel
* 바벨은 자바스크립트 es6 문법을 es5로 변환해주는 트렌스파일러(transpiler) 입니다. 이것을 통해 React를 일반 브라우저에서 실행시킬 수 있습니다. babel 공식 사이트에서 간단하게 es6 문법으로 변환된 자바스크립트 코드를 확인할 수 있습니다.