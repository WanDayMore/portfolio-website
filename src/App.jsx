import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MainMenu from './components/MainMenu';
import ProjectPage from './pages/ProjectPage';
import InternshipPage from './pages/InternshipPage';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Standalone Landing Page */}
      

      {/* Shared Layout Group: MainMenu wraps all child routes inside its <Outlet /> */}
      <Route path="/" element={<MainMenu />}>
        <Route path="/about" element={<AboutPage />} />
         <Route path="/projects" element={<ProjectPage />} /> 
         <Route path="/internship" element={<InternshipPage/>} />

      </Route>
    </Routes>
  );
}

export default App;