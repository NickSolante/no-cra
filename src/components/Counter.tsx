import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Counter: {count}</p>
      <p>no homorokik</p>
      <button onClick={() => setCount(count + 1)}>Bhello</button>
    </div>
  )
}
