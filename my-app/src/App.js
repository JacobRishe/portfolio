import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/projects' component = { Projects } />
        <Route path='/contact' component = { Contact } />
        <Route path='/about' component = { About } />
        <Route path='/' component = { Home } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
