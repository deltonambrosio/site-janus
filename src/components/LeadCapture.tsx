import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Pegar dados do formulário
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      // Usando FormSubmit.co para envio direto via AJAX (sem precisar de backend complexo)
      // Substitua "SEU_EMAIL_AQUI@dominio.com" pelo e-mail comercial real de vocês.
      await fetch("https://formsubmit.co/ajax/contato@janus.education", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nome: data.name,
            Email: data.email,
            WhatsApp: data.whatsapp,
            Empresa: data.company,
            Perfil: data.profile,
            _subject: "Novo Lead - Site JANUS: " + data.name,
            _template: "table" // Deixa o e-mail formatado bonito em tabela
        })
      });
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Houve um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section id="leads" className="section-spacing" style={{ background: '#050505', position: 'relative' }}>
      <div className="container">
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '40px',
          padding: '80px 40px',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Glows */}
          <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(60, 81, 241, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(155, 48, 255, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Transforme sua <br /> educação com inteligência <span className="gradient-text">contextual.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', marginBottom: '2.5rem' }}>
                Preencha o formulário para falar com o nosso time de especialistas e solicitar uma demonstração personalizada da JANUS.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={20} color="var(--color-cyan)" /> Personalização Pedagógica em Escala
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={20} color="var(--color-cyan)" /> Implementação em menos de 15 dias
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={20} color="var(--color-cyan)" /> Suporte Enterprise Completo
                 </div>
              </div>
            </div>

            <div>
              {!submitted ? (
                <form 
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative', zIndex: 10 }}
                >
                  <input required name="name" placeholder="Nome Completo" type="text" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: '#fff' }} />
                  <input required name="email" placeholder="E-mail Corporativo" type="email" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: '#fff' }} />
                  <input required name="whatsapp" placeholder="WhatsApp" type="tel" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: '#fff' }} />
                  <input required name="company" placeholder="Empresa ou Instituição" type="text" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: '#fff' }} />
                  
                  <select required name="profile" defaultValue="" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: '#fff' }}>
                    <option value="" disabled>Seu Perfil</option>
                    <option value="infoprodutor">Infoprodutor / Creator</option>
                    <option value="universidade">Universidade / Instituição</option>
                    <option value="outro">Outro</option>
                  </select>

                  <button 
                    disabled={loading}
                    className="btn-primary" 
                    style={{ 
                      marginTop: '10px', 
                      width: '100%', 
                      justifyContent: 'center', 
                      fontSize: '1.1rem', 
                      padding: '16px',
                      opacity: loading ? 0.7 : 1
                    }}
                  >
                    {loading ? "Enviando..." : (
                       <>Solicitar Demonstração <Send size={20} /></>
                    )}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                    Fique tranquilo, não enviamos spam. Seu contato está seguro.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px' }}
                >
                   <CheckCircle size={64} color="var(--color-cyan)" style={{ marginBottom: '20px' }} />
                   <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Solicitação Enviada!</h3>
                   <p style={{ color: 'var(--color-muted)' }}>Nosso time entrará em contato em breve para apresentar a JANUS.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
