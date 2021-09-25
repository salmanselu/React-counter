import {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count+1);
  }
  let decrementCount = () => {
    (count > 0) && setCount(count-1);
  }

  return (
    <div className="App">
      <h1>The Count is:{count}</h1>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
    </div>
  );
}

export default App;
