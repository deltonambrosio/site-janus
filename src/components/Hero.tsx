import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(60, 81, 241, 0.15) 0%, transparent 70%)',
        zIndex: -1,
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(155, 48, 255, 0.1) 0%, transparent 70%)',
        zIndex: -1,
      }}></div>

      <div className="container" style={{ textAlign: 'center', paddingTop: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '20px' }}
        >
          <span style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            color: 'var(--color-cyan)',
            padding: '8px 16px',
            border: '1px solid rgba(0, 245, 255, 0.2)',
            borderRadius: '100px',
            background: 'rgba(0, 245, 255, 0.05)',
          }}>
            IA CONTEXTUAL PARA EDUCAÇÃO ENTERPRISE
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            lineHeight: 1.1, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(to bottom, #fff 0%, #aab 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '900px',
            margin: '0 auto 1.5rem',
            fontWeight: 800,
          }}
        >
          O futuro da educação <br /> é <span className="gradient-text">contextual.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.4rem)', 
            color: 'var(--color-muted)', 
            maxWidth: '650px', 
            margin: '0 auto 2.5rem',
            lineHeight: 1.5,
          }}
        >
          A JANUS é a primeira plataforma de ensino adaptativo que personaliza a aprendizagem em escala. 
          Transforme cursos estáticos em jornadas inteligentes que entendem o seu aluno.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <a href="#leads" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>
            Solicitar demonstração
          </a>
          <a href="#como-funciona" className="btn-secondary" style={{
            fontSize: '1.1rem',
            padding: '16px 36px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s',
          }}>
            Quero conhecer a JANUS
          </a>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           style={{ 
              position: 'relative', 
              maxWidth: '1000px', 
              margin: '0 auto',
              perspective: '1000px',
              padding: '20px',
           }}
        >
          <div style={{
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 50px rgba(60, 81, 241, 0.1)',
            transform: 'rotateX(5deg)',
            background: '#111',
          }}>
            <img 
              src="/janus_hero_mockup.png" 
              alt="Dashboard JANUS" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', 
              top: '15%', 
              left: '-5%', 
              background: 'rgba(5,5,5,0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid var(--color-blue)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              zIndex: 10,
            }}
          >
             <Target size={20} color="var(--color-cyan)" />
             <div style={{ textAlign: 'left', fontSize: '0.8rem' }}>
                <div style={{ fontWeight: 700 }}>Personalização ativa</div>
                <div style={{ color: 'var(--color-muted)' }}>Perfil do Aluno A adaptado</div>
             </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ 
              position: 'absolute', 
              bottom: '15%', 
              right: '-5%', 
              background: 'rgba(5,5,5,0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid var(--color-purple)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              zIndex: 10,
            }}
          >
             <Sparkles size={20} color="var(--color-purple)" />
             <div style={{ textAlign: 'left', fontSize: '0.8rem' }}>
                <div style={{ fontWeight: 700 }}>Sugerido pela IA</div>
                <div style={{ color: 'var(--color-muted)' }}>Exemplo contextual carregado</div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
