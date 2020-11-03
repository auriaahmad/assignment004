import React, {useState} from 'react'; 
import {Message} from './message.js'
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [isMorning, setDay] = useState(true);
//  setCount(2); // changing the value of count

  return (
            <div className= {`box ${isMorning ? 'dayLight':''}`}>
                <h1>
                  Day Time = {isMorning ? 'Morning' : 'Night'}
                </h1> 
                  <Message counter={count} />
                    <button onClick={
                      ()=>setCount(count + 1)}>
                      {/* ()=>setCount(++count)}> */}
                      {/* ()=>setCount(count++)}> */}
                        update counter
                    </button>
                    <button onClick = {
                      ()=>setDay(!isMorning)
                    }>
                        update day  
                    </button>
            </div>
          );
}

export default App;
