import './App.css';
import Home from './Home';
import Nav from './Nav';
import SCPs from './SCPs';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/SCPs' element={<SCPs />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
