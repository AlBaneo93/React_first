import React, {useEffect, useRef} from 'react'

const RefTest = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        console.log(inputRef)
        // 컴포넌트가 마운트 되는 즉시, input 박스에 포커스가 되어있다.
        // current???
        inputRef.current.focus()
    }, [inputRef])

    return (
        <>
            <h3>Ref Test</h3>
            <input ref={inputRef}/>
        </>
    )
}

export default RefTest