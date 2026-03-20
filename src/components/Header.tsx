import React from 'react';
import { ChevronRight } from 'lucide-react';

const Header = () => (
  <header style={{ 
    padding: '1.5rem 0', 
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(5, 5, 5, 0.8)',
    backdropFilter: 'blur(20px)',
    zIndex: 1000 
  }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ pointerEvents: 'none' }}>
        <img src="/logo.png" alt="JANUS Logo" style={{ height: '32px', display: 'block' }} />
      </div>
      <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
        <a href="#solucao" className="nav-link">Solução</a>
        <a href="#como-funciona" className="nav-link">Como Funciona</a>
        <a href="#diferenciais" className="nav-link">Diferenciais</a>
        <a href="#duas-frentes" className="nav-link">Planos</a>
      </nav>
      <a href="#contato" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Solicitar Demonstração</a>
    </div>
  </header>
);

export default Header;
