import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ABOUT from './Pages/ABOUT';
import Nav from './components/Nav';
function App() {
 

  return (
    <Router>
      <div>
        <Nav />
    <Routes>


  
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ABOUT />} />


    </Routes>
      </div>
    </Router>
 );
  
}

export default App
