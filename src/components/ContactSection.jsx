import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission / mailto trigger
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Isaiah,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-stone-100/60 border-t border-stone-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Currently open to full-stack engineering roles, software development opportunities, and technical consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 block font-mono">
                  Direct Reach
                </span>
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                  Direct Communication
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Feel free to reach out directly via email or connect on LinkedIn and GitHub. I typically respond within 24 hours.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-stone-200 text-indigo-600 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-500 block uppercase font-mono">Email Address</span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-indigo-600 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-stone-500 hover:text-stone-900 hover:bg-white rounded-lg transition-colors border border-stone-200 shadow-xs"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copied && (
                  <p className="text-xs text-emerald-700 font-medium text-right">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Timezone info */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-600 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Location</span>
                  </div>
                  <p className="text-stone-900 font-semibold">{PERSONAL_INFO.location}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-600 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timezone</span>
                  </div>
                  <p className="text-stone-900 font-semibold">{PERSONAL_INFO.timezone} (PHT)</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-stone-100 space-y-3">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block">
                  Find Me Online
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-stone-600" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-stone-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 border border-stone-200 shadow-xs">
              
              <div className="space-y-1.5 mb-6">
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-stone-600">
                  Fill out the form below to initiate an email inquiry directly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">
                    Email Client Initialized
                  </h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your local email client has been prepared with your message. You can also contact me directly at{' '}
                    <strong className="text-indigo-700 font-semibold">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-stone-700">
                        Your Name <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-xs sm:text-sm text-stone-900 placeholder-stone-400 outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-stone-700">
                        Email Address <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-xs sm:text-sm text-stone-900 placeholder-stone-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-stone-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-xs sm:text-sm text-stone-900 placeholder-stone-400 outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-stone-700">
                      Message <span className="text-indigo-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Isaiah, I'd like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-xs sm:text-sm text-stone-900 placeholder-stone-400 outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
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
