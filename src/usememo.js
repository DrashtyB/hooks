import React, { useState, useMemo } from 'react'

const waitSync = () => {}
function Memo(){
    const [count, setCount] = useState(0)
    const expFunc = (count) => {
        waitSync(18000)
        return(count * 5)
    }
    const resCount = useMemo(()=> {
        return expFunc(count)
    },[count])
    return(
        <div>
            Count: {resCount}
            <input type="text" onChange={e => setCount(e.target.value)} placeholder="Set count"/>
        </div>
    )
}
export default Memo