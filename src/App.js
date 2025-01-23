import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills/Skills';
import Experience from './components/Experience';
import Project from './components/projects/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='h-auto'>
      <Navbar/>
      <Home/>
      {/* <hr className='border-t-1 border-gray-700 border-solid'/> */}
      <About/>
      <hr className='border-t-1 border-gray-700 border-solid'/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
