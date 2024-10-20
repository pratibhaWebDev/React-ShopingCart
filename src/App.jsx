import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div>
      <h1>React Shoping Cart </h1>
      <div className='card'>
        <div className='img'>
          <img src="https://media.istockphoto.com/id/1185028107/photo/young-laughing-woman-standing-with-hands-in-pockets-wearing-blank-white-t-shirt-with-copy.jpg?s=1024x1024&w=is&k=20&c=wsMonIeR4j29qNS1B80qDGTHatkN8trkdOnUWglGjNk=" alt="" />
        </div>
        <div className='add'>
          {count === 0 ? (<button onClick={increment}>Add to Card</button>) : (
            <>
              <button onClick={decrement} disabled={count === 0}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
