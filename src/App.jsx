import { Navbar } from './components/Navbar';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import bgImage from './assets/pixel-art.jpeg'; // ✅ Import image

function App() {
  return (
    <div
      className={styles.App}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
