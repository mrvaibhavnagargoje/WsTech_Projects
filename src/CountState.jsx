import React, { useState } from "react"

function CountState() {
  const [pshow, setPshow] = useState(false)

  let temp = ""
  if (pshow) {
    temp = 
      <>
        <button onClick={()=>setPshow(false)}>Hide</button>
        <p>Vaibhav</p>
        <Card/>
      </>
 
  } else {
    temp = <button onClick={()=>setPshow(true)}>Show</button>
  }


  //   const [count, setCount] = useState(10)
  //   const handelInr = () => {
  //     setCount(count + 1)
  //   }
  //   const handelDec = () => {
  //     if (count > 0) {
  //       setCount(count - 1)
  //     }
  //   }

  return (
    <div>
      {temp}
    {/* <h1>{count}</h1>
      
      <button onClick={handelInr}>Increses</button>
      <button onClick={handelDec}>Decreses</button> */}
    </div>
  )
}

export default CountState



function Card(){
    return(
        <h1>Vaibhav nagargoje</h1>
    )
}