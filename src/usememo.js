import React, { useState, useMemo } from 'react'

function Memo(){
    const [count, setCount] = useState(0)
    const multiplier = (count) => {
        return(count * 10)
    }
    const memoCount = useMemo(()=> {
        return multiplier(count)
    },[count])
    return(
        <div>
            <p>"useMemo:"</p>
            Count: {memoCount}
            <br/>
            <input type="text" onChange={e => setCount(e.target.value)} />
        </div>
    )
}
export default Memo