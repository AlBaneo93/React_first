import React, {useState} from "react";

const Counter = () => {
    // useState를 사용
    /* useState는 하나의 상태값만 관리가 가능하기 때문에, 여러개의 상태(state)를 사용한다면,
    *  상태의 수만큼의 useState() 함수가 필요하다
    * */
    const [count, setCount] = useState(0);
    const handlerAdd = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }
    const handlerMinus = (e) => {
        e.preventDefault()
        setCount(count - 1)
    }
    return (
        <>
            <h1>현재 카운터 값은 {count} 입니다</h1>
            <button onClick={handlerAdd}>+1</button>
            <button onClick={handlerMinus}>-1</button>
        </>
    )
}
export default Counter