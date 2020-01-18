import React from 'react';
import './App.css';
//import UseEffectHook from './components/UseEffectHook';
// import ArrayHooks from './components/ArrayHook';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
// import CounterObject from './components/ObjectHook';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <CounterHook /> */}
        {/* <CounterObject /> */}
        {/* <ArrayHooks /> */}
        {/* <UseEffectHook /> */}
        <h1>Counter : {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREAMENT' })}>INCREAMENT</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
      </header>
    </div>
  );
}

export default App;
