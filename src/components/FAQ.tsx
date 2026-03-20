import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      style={{ 
        borderBottom: '1px solid rgba(255,255,255,0.05)', 
        padding: '24px 0', 
        cursor: 'pointer' 
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{question}</h3>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} color="var(--color-blue)" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: 'var(--color-muted)', paddingTop: '1.5rem', lineHeight: 1.6, maxWidth: '900px' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "O que é a JANUS?",
      answer: "A JANUS é uma infraestrutura educacional de ensino adaptativo. Diferente de plataformas de cursos que apenas hospedam vídeos, a JANUS utiliza Inteligência Artificial Contextual para personalizar a entrega pedagógica para cada aluno em escala."
    },
    {
       question: "A metodologia de ensino continua sendo minha?",
       answer: "Sim, absolutamente. Você (ou sua instituição) sobe o conteúdo base e define a metodologia. A JANUS atua como uma camada pedagógica inteligente que adapta a FORMA de entregar esse conhecimento para cada perfil de aluno, mas a essência do conteúdo é 100% sua."
    },
    {
       question: "Para quem a JANUS é ideal?",
       answer: "A plataforma atende dois perfis principais: Infoprodutores e Creators que vendem treinamentos, cursos e mentorias digitais, e Universidades e Instituições que buscam uma solução White Label de ponta com IA contextual para seus alunos."
    },
    {
       question: "A JANUS substitui o professor ou especialista?",
       answer: "Não. Ela potencializa. A IA da JANUS atua como um assistente pedagógico 24/7 que sanclará dúvidas, adaptará exemplos e garantirá que o aluno entenda o conteúdo conforme sua velocidade e dificuldades, liberando o especialista para focar no conteúdo estratégico."
    },
    {
       question: "A plataforma pode ser usada com minha marca (White Label)?",
       answer: "Sim. Nossas soluções institucionais permitem personalização total da interface, domínio e branding para garantir que a percepção de valor recaia totalmente sobre a sua marca."
    },
    {
       question: "Como funciona a implementação?",
       answer: "Nosso time de onboarding acompanha todo o processo. Conectamos seu conteúdo base à nossa IA contextual e configuramos a estrutura de acordo com sua metodologia de ensino."
    }
  ];

  return (
    <section id="faq" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>Perguntas Frequentes</h2>
          <p style={{ color: 'var(--color-muted)' }}>Tudo o que você precisa saber sobre a JANUS.</p>
        </div>
        <div>
          {faqs.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
