import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="main-container">
    <div className="content-wrap">
      <Navbar />
      <Header />
    </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
