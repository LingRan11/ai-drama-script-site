import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Get In <span className="text-[#6C63FF]">Touch</span>
        </h1>
        <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6C63FF]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#6C63FF]" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Email</h3>
                <p className="text-sm text-[#A0A0A0]">hello@dramaai.com</p>
                <p className="text-sm text-[#A0A0A0]">support@dramaai.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6C63FF]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#6C63FF]" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Office</h3>
                <p className="text-sm text-[#A0A0A0]">123 Innovation Drive</p>
                <p className="text-sm text-[#A0A0A0]">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-[#1A1A2E]/50 border border-white/5">
            <h3 className="font-medium mb-2">Business Hours</h3>
            <p className="text-sm text-[#A0A0A0]">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
            <p className="text-sm text-[#A0A0A0]">Saturday - Sunday: Closed</p>
            <p className="text-sm text-[#A0A0A0] mt-2">We typically respond within 24 hours.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A2E] border border-white/5 focus:border-[#6C63FF] focus:outline-none text-sm placeholder-[#A0A0A0]/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A2E] border border-white/5 focus:border-[#6C63FF] focus:outline-none text-sm placeholder-[#A0A0A0]/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A2E] border border-white/5 focus:border-[#6C63FF] focus:outline-none text-sm placeholder-[#A0A0A0]/50 transition-colors"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A2E] border border-white/5 focus:border-[#6C63FF] focus:outline-none text-sm placeholder-[#A0A0A0]/50 transition-colors resize-none"
                placeholder="Tell us more..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#6C63FF] hover:bg-[#5A52E0] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            {submitted && (
              <p className="text-sm text-green-400 text-center">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}