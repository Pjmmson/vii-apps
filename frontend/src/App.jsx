import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  // useEffect(() => {
  //   fetch('http://127.0.0.1')
  //   .then(response => response.json())
  //   .then(data => setMessage(data.message))
  //   .catch(error => {
  //     console.error("Connection failed: ",error);
  //     setMessage("Connection failed. Check your console logs.")
  //   })
  // },[]);
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
        <p>{message}</p>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
