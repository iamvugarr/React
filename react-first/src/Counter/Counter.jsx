import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count + 1)
  }

  function deCrease(){
    if(count > 0)
    setCount(count - 1)
  }

  function reset(){
    setCount(count - count)
  }

  return (
    <div>
      How many times button clicked <br></br>
      {count} <br />
      <button onClick={increase}>Increase</button>
      <button onClick={deCrease}>Decrase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>This button clicked {count} times </button>
    </div>
  )
}

export default Counter;