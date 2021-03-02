import React, {useState} from 'react'

const LoginForm = ({handler}) => {

    return (
        <>
            <h1>로그인을 해주세요</h1>
            <button value={false} onClick={handler}>로그인</button>
        </>
    )
}

const LogedIn = ({handler}) => {
    return (
        <>
            <h1>로그인 성공</h1>
            <button value={true} onClick={handler}>로그 아웃</button>
        </>
    )
}

const LoginMange = ({isLogin, handler}) => {
    if (isLogin) {
        return <LogedIn handler={handler}/>
    } else {
        return <LoginForm handler={handler}/>
    }
}

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const clickHandler = (e) => {
        e.preventDefault()
        setIsLogin(!isLogin)
        console.log(typeof (e.target.value)) // target.value는 string 타입

    }
    return (
        <div>
            <LoginMange isLogin={isLogin} handler={clickHandler}/>
            {/*<button onClick={clickHandler}>로그인 버튼</button>*/}
        </ div>
    )
}

export default Login