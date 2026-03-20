import React from 'react';
import { motion } from 'framer-motion';
import { FileWarning, Users, Layout } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problema" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
            O grande gargalo da <br /> <span className="gradient-text">educação digital.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Até agora, conseguimos escalar a entrega de conteúdo (vídeos, PDFs, aulas gravadas), 
            mas perdemos a essência do ensino: <strong>a adaptação pedagógica.</strong>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {[
            {
              icon: <Layout size={32} color="var(--color-purple)" />,
              title: "Conteúdo Estático e Igual",
              desc: "Todos os alunos recebem a mesma trilha, independente do nível de conhecimento, dificuldade ou perfil de aprendizado."
            },
            {
              icon: <Users size={32} color="var(--color-cyan)" />,
              title: "Falta de Suporte em Escala",
              desc: "O especialista não consegue estar presente para todos, e tutores humanos são caros e lentos para escalar."
            },
            {
              icon: <FileWarning size={32} color="var(--color-blue)" />,
              title: "Baixo Engajamento",
              desc: "Experiências genéricas resultam em taxas de conclusão baixas e percepção de valor diluída."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{ padding: '40px', textAlign: 'left' }}
            >
              <div style={{ marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          marginTop: '60px', 
          padding: '40px', 
          borderRadius: '24px', 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>
            “A educação digital conseguiu escalar o conteúdo, mas ainda não conseguiu escalar a <span style={{color: 'var(--color-blue)'}}>adaptação pedagógica.</span>”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
