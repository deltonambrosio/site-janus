import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, ArrowUpRight } from 'lucide-react';

const TwoFronts = () => {
  return (
    <section id="duas-frentes" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
            Duas frentes, o mesmo <br /> <span className="gradient-text">padrão de excelência.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Seja você um criador individual ou uma instituição centenária, 
            a tecnologia da JANUS se adapta às suas necessidades.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
          {/* Creators Front */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card" 
            style={{ padding: '60px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ 
               position: 'absolute', 
               top: '10px', 
               right: '10px', 
               padding: '8px 16px', 
               fontSize: '0.75rem', 
               fontWeight: 700, 
               background: 'rgba(255,255,255,0.05)', 
               borderRadius: '100px',
               color: 'var(--color-blue)'
            }}>PARA ESPECIALISTAS</div>
            <User size={48} color="var(--color-blue)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>JANUS para Infoprodutores e Creators</h3>
            <ul style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-blue)" /> Transforme mentorias em escala</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-blue)" /> Sua metodologia em modo personalizado</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-blue)" /> Experiência premium para seu conteúdo</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-blue)" /> Maior retenção e satisfação do aluno</li>
            </ul>
            <a href="#leads" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
               Quero Para Meu Treinamento
            </a>
          </motion.div>

          {/* Institutional Front */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card" 
            style={{ padding: '60px', position: 'relative', overflow: 'hidden' }}
          >
             <div style={{ 
               position: 'absolute', 
               top: '10px', 
               right: '10px', 
               padding: '8px 16px', 
               fontSize: '0.75rem', 
               fontWeight: 700, 
               background: 'rgba(255,255,255,0.05)', 
               borderRadius: '100px',
               color: 'var(--color-cyan)'
            }}>ENTEPRISE WHITE LABEL</div>
            <GraduationCap size={48} color="var(--color-cyan)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>JANUS White Label para Instituições</h3>
            <ul style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-cyan)" /> Tecnologia adaptativa com sua marca</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-cyan)" /> Infraestrutura robusta para Universidades</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-cyan)" /> Apoio docente com IA para personalização</li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowUpRight size={16} color="var(--color-cyan)" /> Inovação pedagógica de alto nível</li>
            </ul>
            <a href="#leads" className="btn-secondary" style={{ 
               width: '100%', 
               justifyContent: 'center', 
               background: 'transparent',
               border: '1px solid var(--color-cyan)',
               color: 'var(--color-cyan)',
               padding: '12px 28px',
               borderRadius: '12px',
               fontWeight: 600,
               display: 'inline-flex',
               cursor: 'pointer'
            }}>
               Falar com Time Comercial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoFronts;
