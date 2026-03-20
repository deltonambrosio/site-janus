import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Mic, FileText, CheckCircle2 } from 'lucide-react';

const StudentExperience = () => {
  return (
    <section className="section-spacing" style={{ background: '#080809' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 60%)', zIndex: -1 }}></div>
            <img 
               src="/janus_student_exp.png" 
               alt="Experiência do Aluno Janus" 
               style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }}
            />
          </motion.div>

          <div>
             <span style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
               FOCO NO ALUNO
             </span>
             <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
               Uma trilha única para <br /> <span className="gradient-text">cada estudante.</span>
             </h2>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', marginBottom: '2.5rem' }}>
                A experiência do aluno na JANUS é moldada pela sua interação. Não é apenas assistir vídeos; 
                é participar de um diálogo pedagógico onde cada etapa é validada e adaptada.
             </p>

             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {[
                  { icon: <PlayCircle color="var(--color-blue)" />, title: "Video Adaptativo", text: "Explicações que mudam de acordo com a base do aluno." },
                  { icon: <Mic color="var(--color-purple)" />, title: "Suporte via Áudio", text: "Transcrição e insights rápidos via contexto." },
                  { icon: <FileText color="var(--color-cyan)" />, title: "Quizzes Dinâmicos", text: "Questões que testam o domínio real, não o decorado." },
                  { icon: <CheckCircle2 color="#fff" />, title: "Gamificação", text: "Progresso baseado em domínio contextual de tópicos." }
                ].map((item, i) => (
                   <div key={i}>
                      <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{item.text}</p>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;
