import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="main-container">
    <div className="content-wrap">
      <Navbar />
    </div>
    <Switch>
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact } />
      <Route path='/' component = { Home } />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
