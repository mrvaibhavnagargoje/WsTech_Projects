import React, { useState } from 'react'

function PasswordHide() {
    const [pstatus, setStatus]=useState(false)
  return (
    <div>
        <input type={pstatus?"text":"password"} />
        <button onClick={()=>setStatus(!pstatus)}> {pstatus?"Hide":"Show"}</button>
    </div>
  )
}

export default PasswordHide