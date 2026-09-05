import { useEffect, useState } from 'react';
import api from './api/axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/test-connection')
      .then((response) => {
        // Axios automatically parses JSON into response.data
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage('Connection failed. Check your console logs.');
      });
  }, []);

  return (
    <>
      <section id="center">
        <div>
          <h1>Are you ready to Vii your own issue ...!!!</h1>
          <p>
            <code>src/App.jsx</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Count is {count}
        </button>
        <div>
          <p style={{ color: message.includes('!!!') ? 'green' : 'orange', fontWeight: 'bold' }}>
            {message}
          </p>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;