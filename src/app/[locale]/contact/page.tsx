'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertTriangle } from 'lucide-react';

export default function ContactPage() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="bg-[#161b22] border-b border-white/5">
        <div className="container-custom py-14 lg:py-20">
          <div className="section-tag">{fr ? 'Prenez contact' : 'Get in touch'}</div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            {fr ? 'Contactez-nous' : 'Contact Us'}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            {fr
              ? 'Notre équipe est disponible pour répondre à toutes vos questions.'
              : 'Our team is available to answer all your questions.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {fr ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>

              {status === 'success' ? (
                <div className="card-glass p-8 rounded-xl text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {fr ? 'Message envoyé !' : 'Message sent!'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {fr ? 'Nous vous répondrons dans les plus brefs délais.' : 'We will get back to you as soon as possible.'}
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="btn-outline-primary mt-6 text-sm"
                  >
                    {fr ? 'Nouveau message' : 'New message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">{fr ? 'Nom complet' : 'Full name'} *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder={fr ? 'Jean Dupont' : 'John Doe'}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">{fr ? 'Téléphone' : 'Phone'}</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+237 6XX XXX XXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder={fr ? 'votre@email.com' : 'your@email.com'}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">{fr ? 'Sujet' : 'Subject'} *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={fr ? 'Ex: Demande de devis' : 'Ex: Quote request'}
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">{fr ? 'Message' : 'Message'} *</label>
                    <textarea
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder={fr ? 'Décrivez votre besoin...' : 'Describe your need...'}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {fr ? 'Envoi en cours...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {fr ? 'Envoyer le message' : 'Send message'}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                {fr ? 'Nos Coordonnées' : 'Our Contact Details'}
              </h2>

              {[
                {
                  icon: MapPin,
                  title: fr ? 'Adresse' : 'Address',
                  content: 'Busumbii Entrance Mile 3\nLimbe, Cameroun',
                  link: 'https://maps.google.com/?q=Limbe+Cameroon',
                },
                {
                  icon: Phone,
                  title: fr ? 'Téléphone' : 'Phone',
                  content: '(+237) 690 208 485',
                  link: 'tel:+237690208485',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@belambiigarage.com',
                  link: 'mailto:info@belambiigarage.com',
                },
                {
                  icon: Clock,
                  title: fr ? 'Horaires' : 'Opening Hours',
                  content: fr ? 'Lundi – Samedi : 10h00 – 17h30\nDimanche : Fermé' : 'Monday – Saturday: 10:00 – 17:30\nSunday: Closed',
                  link: null,
                },
              ].map(({ icon: Icon, title, content, link }) => (
                <div key={title} className="card-glass rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0065CA]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">{title}</div>
                    {link ? (
                      <a href={link} className="text-gray-300 text-sm hover:text-white transition-colors whitespace-pre-line">
                        {content}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm whitespace-pre-line">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Emergency */}
              <div className="bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F97316] font-semibold text-sm mb-1">
                      {fr ? 'Dépannage d\'urgence' : 'Emergency Breakdown'}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {fr
                        ? 'Pour toute intervention d\'urgence, appelez-nous directement.'
                        : 'For any emergency call-out, contact us directly.'}
                    </p>
                    <a href="tel:+237690208485" className="inline-flex items-center gap-1.5 mt-2 text-[#F97316] font-bold text-sm hover:text-orange-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      (+237) 690 208 485
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
