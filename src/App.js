import Button from './components/Button/Button';
import './App.css';
import Input from './components/Input/Input';
import Clear from './components/Clear/Clear';
import { useState } from 'react';
function App() {
  const [input, setIput] = useState('');
  const addToInput = val => {
    setIput(input + val);
  };
  const handleClear = () => {
    setIput('');
  };
  return (
    <div className='App'>
      <div className='calc-wrapper'>
        <Input input={input} />

        <div className='row'>
          <Button addToInput={addToInput}>7</Button>
          <Button addToInput={addToInput}>8</Button>
          <Button addToInput={addToInput}>9</Button>
          <Button addToInput={addToInput}>/</Button>
        </div>
        <div className='row'>
          <Button addToInput={addToInput}>4</Button>
          <Button addToInput={addToInput}>5</Button>
          <Button addToInput={addToInput}>6</Button>
          <Button addToInput={addToInput}>*</Button>
        </div>
        <div className='row'>
          <Button addToInput={addToInput}>1</Button>
          <Button addToInput={addToInput}>2</Button>
          <Button addToInput={addToInput}>3</Button>
          <Button addToInput={addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button addToInput={addToInput}>.</Button>
          <Button addToInput={addToInput}>0</Button>
          <Button addToInput={addToInput}>=</Button>
          <Button addToInput={addToInput}>-</Button>
        </div>
        <Clear handleClear={handleClear}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
