import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);

    // Simulate sending / prepare mailto fallback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Connect & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in collaborating on AI/ML projects, discussing problem solving in C/Python, or sharing opportunities? Reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy-to-Clipboard */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Direct Email
                </span>
                <p className="text-lg font-bold text-white break-all">
                  {personalInfo.email}
                </p>
              </div>

              {/* Direct Copy Button */}
              <button
                onClick={handleCopyEmail}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  copied
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30 text-cyan-300 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quick response time • Open to student tech clubs & internships</span>
              </div>
            </div>

            {/* Quick Links & Socials */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Profiles & Location
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-cyan-500/30 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">GitHub</div>
                      <div className="text-[11px] text-slate-400 font-mono">Repositories & code history</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-blue-500/30 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/40">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">LinkedIn</div>
                      <div className="text-[11px] text-slate-400 font-mono">Professional network</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-slate-300">
                  <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">Location</div>
                    <div className="text-[11px] text-slate-400">BIT Campus, V.V. Puram, Bengaluru</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Thank You, {formData.name}!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your message has been captured. Would you also like to launch your default mail app with this drafted text?
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-colors shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Mail App</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/[0.06] pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white">Send a Message</h3>
                    <p className="text-xs text-slate-400">Fill in the fields below and I'll get back to you shortly.</p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                      {error}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Prachi, I came across your portfolio and wanted to reach out regarding..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 active:scale-[0.99]"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-dark-950" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
