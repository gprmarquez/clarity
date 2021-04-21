import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // fetch is used to send a request to the Flask API (returns a promise)
    // then is used after the promise is fulfilled
    // res.json is used to convert the response/payload to a javascript object
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;

// import React from 'react'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <h1>Preliminary Form</h1>
//       <form>
//         <fieldset>
//           <label>
//             <p>Name</p>
//             <input name="name" />
//           </label>
//         </fieldset>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;