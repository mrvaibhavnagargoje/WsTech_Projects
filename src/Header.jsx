import React from "react"

function Header({headerInfo,cname,children}) {
  return (
    <div>
      {children}
      <h1>Header {cname}</h1>
      <h3>Email:{headerInfo.email}, Phone:{headerInfo.phone}</h3>
    
    </div>
  )
}

export default Header
