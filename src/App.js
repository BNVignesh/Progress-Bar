import './style.css'
import './App.css';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleAction = (action) => {
    setHistory([...history, number]);
    setRedoStack([]);
    if (action === 'increment' && number < 150) {
      setNumber(prevNumber => prevNumber + 1);
    } else if (action === 'decrement' && number > 0) {
      setNumber(prevNumber => prevNumber - 1);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack([number, ...redoStack]);
      setNumber(lastState);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastRedo = redoStack.shift();
      setHistory([...history, number]);
      setNumber(lastRedo);
    }
  };

  return (
    <>
      <div className='buttons'>
        <button onClick={() => handleAction('decrement')}>-</button>
        <button onClick={() => handleAction('increment')}>+</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        

      </div>
      <div>
      <p>Number: {number}</p>
      <ProgressBar progress={(number / 150) * 100} />
      </div>
    </>

  );
}

export default App;
