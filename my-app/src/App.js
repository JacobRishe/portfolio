import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
    <div className="main-container">
    <div className="content-wrap">
      <Navbar />
      <Header />
    </div>
      <Footer />
    </div>
    </Switch>
    </Router>
  );
}

export default App;
