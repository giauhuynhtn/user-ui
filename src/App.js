import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import HomePage from './pages/HomePage.js'
import DetailsPage from './pages/DetailsPage.js'

function App() {
  const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
  

  return (
    <div className="app">
      <nav>
        <Link to="/" className="nav-btn__home">Home Page</Link>
      </nav>
      <Routes>
          <Route path="/" element={<HomePage data={data}/>} />
          <Route path="/details/user/:id" element={<DetailsPage data={data}/>} />
      </Routes> 
    </div>
  );
}

export default App;
