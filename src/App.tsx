import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Objectives from './pages/Objectives';
import Activities from './pages/Activities';
import Programs from './pages/Programs';
import Publications from './pages/Publications';
import ProjectsTeam from './pages/ProjectsTeam';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="h-20"></div> {/* Spacer for fixed header */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/objectives" element={<Objectives />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects-team" element={<ProjectsTeam />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
