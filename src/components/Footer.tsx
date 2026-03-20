import React from 'react';

const Footer = () => (
   <footer style={{ 
      padding: '80px 0 40px', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      backgroundColor: '#050505',
      textAlign: 'center'
   }}>
      <div className="container">
         <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo.png" alt="JANUS Logo" style={{ height: '48px', marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--color-muted)', maxWidth: '400px', margin: '0 auto', fontSize: '0.85rem' }}>
               A primeira plataforma de IA Contextual para educação adaptativa do Brasil.
            </p>
         </div>

         <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            <a href="#solucao" className="footer-link">Solução</a>
            <a href="#leads" className="footer-link">Parcerias</a>
            <a href="#faq" className="footer-link">Ajuda</a>
            <a href="#leads" className="footer-link">Time Comercial</a>
         </div>

         <div style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ color: 'var(--color-muted)', fontSize: '0.8rem' }}>
               © {new Date().getFullYear()} JANUS. Todos os direitos reservados.
            </div>
            <div style={{ display: 'flex', gap: '20px', color: 'var(--color-muted)', fontSize: '0.8rem' }}>
               <a href="#">Privacidade</a>
               <a href="#">Termos de Uso</a>
            </div>
         </div>
      </div>
   </footer>
);

export default Footer;
