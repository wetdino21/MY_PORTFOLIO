import React from 'react';
import About from './components/sections/About';
import PlayBox from './components/sections/PlayBox';
import Projects from './components/sections/Project';
import Contact from './components/sections/Contact';

const Page: React.FC = () => {
  return (
    <main>
      <About />
      <Projects />
      <PlayBox />
      <Contact />
    </main>
  );
};

export default Page;


