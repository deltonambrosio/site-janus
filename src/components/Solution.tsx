import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Zap, Settings } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solucao" className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--color-bg-deep) 0%, #111 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
            A Solução JANUS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
            Onde a IA encontra a <br /> <span className="gradient-text">metodologia humana.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto' }}>
            A JANUS não é um chatbot ou um LMS comum. É uma infraestrutura de IA contextual 
            que trabalha para adaptar sua metodologia ao momento de cada aluno.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            {[
              {
                 icon: <Cpu size={24} color="var(--color-blue)" />,
                 title: "IA Contextual Própria",
                 desc: "Nossa IA não apenas gera texto; ela entende o contexto do curso, a metodologia do autor e o histórico do aluno."
              },
              {
                 icon: <Eye size={24} color="var(--color-cyan)" />,
                 title: "Personalização Invisível",
                 desc: "A adaptação acontece de forma fluida. O aluno recebe explicações e exemplos que fazem sentido para a realidade DELE."
              },
              {
                 icon: <Zap size={24} color="var(--color-purple)" />,
                 title: "Escalabilidade Pedagógica",
                 desc: "Sua metodologia agora pode ser entregue de forma personalizada para 100 ou 100.000 alunos simultaneamente."
              },
              {
                 icon: <Settings size={24} color="#fff" />,
                 title: "Metodologia Preservada",
                 desc: "O conteúdo-base continua sendo o seu. A IA atua como uma assistente pedagógica que adapta a FORMA de ensinar."
              }
            ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}
               >
                  <div style={{ 
                    minWidth: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'rgba(255,255,255,0.05)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
               </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 0 50px rgba(60, 81, 241, 0.1)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(60, 81, 241, 0.1), transparent)', pointerEvents: 'none' }}></div>
            <img 
               src="/janus_how_it_works_visual.png" 
               alt="Visualização da IA Contextual" 
               style={{ width: '100%', display: 'block' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
