import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Stats from './Stats';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { BiCaretUp } from 'react-icons/bi';
//
function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />

      <div className='icon-div'>
        <a href='#top' className='top-button'>
          <abbr title='Go To Top'>
            {' '}
            <BiCaretUp style={{ color: '#c12020', fontSize: '2.4rem' }} />
          </abbr>
        </a>
      </div>
    </div>
  );
}

export default App;
