import { useState } from 'react'
import smanticLogo from './assets/smanticsurferimage.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/whoenig44/syntax-surfers-project-2" target="_blank">
          <img src={smanticLogo} className="logo" alt="Semantic Surfers Logo" />
        </a>
      </div>
      <h1>Welcome to the Health Monitoring Application!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Push to main branch of Git Repo to trigger rebuild of Production Application
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Semantic Surfers Logo above to go to the GitHub Repository for this project
      </p>
    </>
  )
}

export default App
