
import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  function increamne(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={increamne}>INCREMENT</button>
    <button onClick={decrement}>DCREMENT</button>
    </>
  );
}

export default App;
