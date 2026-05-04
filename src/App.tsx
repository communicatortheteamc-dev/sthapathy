import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BirthdayPopup from './components/BirthdayPopup';
import Home from './pages/Home';
import About from './pages/About';
import Objectives from './pages/Objectives';
import Activities from './pages/Activities';
import Programs from './pages/Programs';
import Publications from './pages/Publications';
import ProjectsTeam from './pages/ProjectsTeam';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Workshops from "./pages/new-pages/Workshops_TEMP";
import PublicationsKnowledge from "./pages/new-pages/PublicationsKnowledge_TEMP";
import HeritageWalks from "./pages/new-pages/HeritageWalks_TEMP";
import SocialService from "./pages/new-pages/SocialService_TEMP";
import TempleProjects from "./pages/new-pages/Temple-projects";
import InternationalCollaborations from "./pages/new-pages/International-collaborations";
import SeminarsExhibitions from "./pages/new-pages/Seminars-exhibitions";
import DocumentationArchives from "./pages/new-pages/Documentation-archives";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <BirthdayPopup />
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
            <Routes>
    <Route path="/workshops" element={<Workshops />} />
    <Route path="/publications-knowlegde" element={<PublicationsKnowledge />} />
    <Route path="/heritage-walks" element={<HeritageWalks />} />
    <Route path="/social-service" element={<SocialService />} />
  </Routes>
  <Routes>
    <Route path="/temple-projects" element={<TempleProjects />} />
    <Route
      path="/international-collaborations"
      element={<InternationalCollaborations />}
    />
    <Route path="/seminars-exhibitions" element={<SeminarsExhibitions />} />
    <Route path="/documentation-archives" element={<DocumentationArchives />} />
  </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
