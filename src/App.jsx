import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './footer.jsx' // Use the correct casing to match the file name

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <nav style={{ margin: '1rem 0', textAlign: 'center' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
        <Link to="/dashboard" style={{ margin: '0 1rem' }}>Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </Router>
  )
}

export default App
