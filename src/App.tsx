import React from 'react';
import Hero from './components/Hero';
import Memories from './components/Memories';
import SkillTree from './components/SkillTree';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sekiro-dark text-sekiro-paper selection:bg-sekiro-red selection:text-white">
      <main>
        <Hero />
        
        <section id="projects">
            <Memories />
        </section>
        
        <section id="skills" className="bg-stone-950 border-t border-stone-800">
            <SkillTree />
        </section>

        <section id="education">
            <Education />
        </section>

        <section id="contact">
            <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
