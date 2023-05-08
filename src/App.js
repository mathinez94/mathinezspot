import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Stories from './pages/stories/Stories';
import Predictions from './pages/predictions/Predictions';
import Livescore from './pages/livescore/Livescore';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/stories' element={<Stories />}/>
        <Route path='/predictions' element={<Predictions />}/>
        <Route path='/livescore' element={<Livescore />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> 
    </div>
  );
}

export default App;
