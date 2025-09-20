import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement ,incrementByNumber} from './features/counter/counterSlice.js'

function App() {
 const count = useSelector((state)=>state.counter.value);
 const dispatch = useDispatch();
  return (
    <>
     <h1>
Welcome back to the React one {count}
<button onClick={()=>dispatch(increment())}>Increment the count</button>
<button onClick={()=>dispatch(decrement())}>decrement</button>
<button onClick={()=>dispatch(incrementByNumber(10))}>With Number</button>
     </h1>
    </>
  )
}

export default App
