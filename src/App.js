import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[count, setCount] = useState(0);
  function decreaseHandler (){
    setCount(count-1);
  }
  
  function increaseHandler (){
    setCount(count+1);
  }

  function ResetHandler (){
    setCount(0);
  }

  return (
    <div className="A">
    <div className='A1'>Increment & Decrement</div>
    <div className='a'>
      <button className='B' onClick={decreaseHandler}>
        -
      </button>
      <div >
       {count}
      </div>
     <button className='C' onClick={increaseHandler}>
      +
     </button>
    </div>
    <button className='D' onClick={ResetHandler}>
      Reset
     </button>
  </div>
  );
}

export default App;
