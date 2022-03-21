import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutSection from './components/about/AboutSection';
import ProjectSection from './components/project/ProjectSection';
import SkillSection from './components/skills/SkillSection';
import ContactSection from './components/contact/ContactSection';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='topSection'>
        <div className='navbarSection'>
          <Navbar />
        </div>
        <AboutSection/>
      </div>
      <div className='projectSection'>
        <ProjectSection />
      </div>
      <div className="skillsSection">
        <SkillSection />
      </div>
      <div className="contactSection">
        <ContactSection />  
        <Footer />
      </div>
    </Router>
  );
}

export default App;
