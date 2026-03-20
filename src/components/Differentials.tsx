import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Briefcase, Zap, Shield, HelpCircle } from 'lucide-react';

const Differentials = () => {
  const cards = [
    {
      icon: <Target size={24} color="var(--color-blue)" />,
      title: "IA Contextual Própria",
      desc: "Nossa tecnologia não é um simples wrapper de GPT. É uma camada de inteligência contextual treinada para educação."
    },
    {
      icon: <Layers size={24} color="var(--color-cyan)" />,
      title: "Trilhas Adaptativas",
      desc: "O sistema reconhece se o aluno precisa de mais base ou se já dominou o conteúdo, ajustando a trilha em tempo real."
    },
    {
       icon: <Briefcase size={24} color="var(--color-purple)" />,
       title: "White Label Enterprise",
       desc: "Personalize cada pixel. Sua marca, sua URL, sua metodologia – nossa infraestrutura de ponta."
    },
    {
       icon: <Zap size={24} color="#fff" />,
       title: "Multimodalidade",
       desc: "Suporte para áudio, vídeo e texto, criando experiências de aprendizagem ricas e diversificadas."
    },
    {
       icon: <Shield size={24} color="var(--color-blue)" />,
       title: "Segurança de Dados",
       desc: "Sua metodologia é protegida. Seus dados e os dados de seus alunos são tratados com o rigor enterprise."
    },
    {
       icon: <HelpCircle size={24} color="var(--color-cyan)" />,
       title: "Foco no Sucesso",
       desc: "Redução drástica de suporte humano através de sanclagem de dúvidas contextuais e suporte IA."
    }
  ];

  return (
    <section id="diferenciais" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
            Diferenciais que definem uma <br /> <span className="gradient-text">nova categoria.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto' }}>
            A JANUS foi desenhada para quem não aceita o "padrão" do mercado de cursos online.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{ padding: '30px' }}
            >
              <div style={{ marginBottom: '20px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{card.title}</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
