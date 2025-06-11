import React from 'react';
import About from './components/sections/About';
import PlayBox from './components/sections/PlayBox';
import Projects from './components/sections/Project';
import Contact from './components/sections/Contact';

const Page: React.FC = () => {
  return (
    <main>
      <About />
      <PlayBox />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;


