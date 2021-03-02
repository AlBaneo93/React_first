import React, {useReducer} from "react";
import '../utils/useDebounce'

const reducerFunc = (state, action) => {
    console.log(action.name, action.value)
    // console.log(state)
    // console.log(action)
    // 입력값으로 업데이트된 상태값 반환
    return {
        ...state,
        [action.name]: action.value
    }

}

/*
* Input 태그의 값이 변할때마다
* input 태그의 name을 키로 하여 상태 객체 업데이트
* 상태 객체는 reducer함수에서 수행
* */
const InputReducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, {
        name: '',
        nickname: '',
        email: ''
    })

    const {name, nickname} = state;

    const onChange = e => {
        e.persist()
        console.log("Change the input tag")
        console.log(e.target.value)
        // dispatch의 인자가 reducerFunction의 2번째 인자로 들어감
        dispatch(e.target);
    }

    return (
        <>
            <div>
                <input name="name" type="text" value={name} onChange={onChange}/>
                <input name="nickname" type="text" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div><b>이름 : </b> {name}</div>
            </div>
            <div>
                <div><b>별명 : </b> {nickname}</div>
            </div>
        </>
    )
}

export default InputReducer