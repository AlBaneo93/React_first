# React

## Learned

- ref(reference) : 특정 DOM에 접근하기 위해서 ref를 사용
- 컴포넌트 동기화, state 끌어올리기
- debounce와 throttle
- useEffect, useState

#### useEffect

컴포넌트가 렌더링 될 때 마다 특정 작업을 수행하도록 설정할 수 있는 Hook 클래스형 컴포넌트의 componentDidMount와 componenetDidUpdate를 합친 형태로 보아도 무방

##### 마운트 될 때만 실행하고 싶을 때

useEffect의 두번째 파라미터로 **비어있는 배열**을 넣어준다.

```javascript
useEffect(() => {
    console.log("마운트 될 때만 실행")
}, [])
```

##### 특정 값이 업데이트 될 때만 실행하고 싶을 때

useEffect의 두번째 파라미터로 전달되는 배열에 검사하고 싶은 값을 넣어준다.

```javascript
useEffect(() => {
    console.log("name 또는 email 값이 변경될 때만 실행")
}, [name, email])
```

##### 정리 실행

effect가 함수를 반환하면 리액트는 그 함수를 정리가 필요한 시점에 실행시킨다.

```javascript
useEffect(() => {
    function handleStatusChange(status) {
        setIsOnline(status.isonline)
    }

    // effect 이후에 어떻게 정리(clean-up)할지 작성 
    return function cleanup() {
        // 정리를 실행하는 코드 작성
    }
}, [])
```

정리(clean-up)를 위한 함수는 arrow function 도 가능 하며, 함수는 이름에 제한이 없다.

#### ref

특정 DOM에 접근하기 위해서 ref를 사용

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기
- element 사이즈 측정

##### Component에서 ref 사용

```javascript
// input의 DOM을 가리키는 ref(this.inputRef) 설정
<input ref={(ref) => {
    this.inputRef = ref
}}></input>
```

##### hooks에서 ref 사용

```javascript
import React, {useRef, useEffect} from "react";

function App() {
    const inputRef = useRef(null);

    // inputRef가 변경될 때 console.log 실행
    useEffect(() => {
        console.log(inputRef)
    }, [inputRef])

    return (
        <div>
            <input ref={inputRef}/>
        </div>
    )
}
```

#### State 끌어올리기와 Componenet 동기화

