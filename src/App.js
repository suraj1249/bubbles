import logo from './logo.svg';
import './App.css';
import { Circle } from './Circle';
import { useState } from 'react';
import { getRandomHexColor } from './utils';

function App() {
  const [circles,setCircles] = useState([]);
  const handleKeyPress = (e)=>{
    const circle = {
      x:Math.floor(Math.random()*1500),
      y:Math.floor(Math.random()*1000),
      c: getRandomHexColor(),
    }
    setCircles([...circles,circle]);
  }
  return (
    <div className="App" tabIndex={0} onKeyDown={handleKeyPress} >
      <svg width={'100%'} height={'600px'}>
      {
      circles.map((circle)=>{
        
      return <Circle x={circle.x} y={circle.y}  c={circle.c} />
      })
      }
      </svg>
    </div>
  );
}

export default App;
