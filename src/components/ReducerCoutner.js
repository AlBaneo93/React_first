import React, {useReducer} from "react";

const ReducerCounter = () => {

    // Reducer의 state와 dispatch를 받아옴
    // count 상태를 선언하고 초기값은 0으로 설정,
    // arrow 함수를 사용하여 reducer 함수 지정 ( arrow 함수가 아니어도 됨)
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {count: state.count + 1};
            case 'DECREMENT':
                return {count: state.count - 1};
            default:
                return state;
        }
    }, {count: 0})

    return (
        <>
            <p>
                현재 카운터의 값: {state.count}
            </p>
            {/*
             버튼의 Click이벤트 발생 시 dispatch 함수를 통해 reducer의 액션 실행, 
            dispatch 함수의 인자값은 useReducer의 reducer 함수에 전달된다.
            */}
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </>
    )
}

export default ReducerCounter