import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

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
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
