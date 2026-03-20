import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import StudentExperience from './components/StudentExperience';
import Differentials from './components/Differentials';
import TwoFronts from './components/TwoFronts';
import LeadCapture from './components/LeadCapture';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Analytics initialization
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <StudentExperience />
        <Differentials />
        <TwoFronts />
        <LeadCapture />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
