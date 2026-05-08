import { Sparkles, Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About <span className="text-[#6C63FF]">DramaAI</span>
        </h1>
        <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
          We're on a mission to democratize storytelling through AI-powered creative tools.
        </p>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="p-8 rounded-2xl bg-[#1A1A2E]/50 border border-white/5">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-[#A0A0A0] leading-relaxed mb-4">
            DramaAI was born from a simple observation: the demand for short-form drama content 
            is exploding globally, but creating quality scripts remains time-consuming and expensive.
          </p>
          <p className="text-[#A0A0A0] leading-relaxed mb-4">
            Our team of AI researchers, screenwriters, and entertainment industry veterans came 
            together to build a tool that combines the creativity of human storytelling with the 
            speed and scalability of artificial intelligence.
          </p>
          <p className="text-[#A0A0A0] leading-relaxed">
            Today, DramaAI helps thousands of creators worldwide produce compelling short drama 
            scripts in minutes, not days. Whether you're a solo creator or a production studio, 
            our AI understands dramatic structure, character development, and audience engagement.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-[#6C63FF]" />
          </div>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-sm text-[#A0A0A0]">
            Empower every creator with AI tools to tell stories that captivate audiences worldwide.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-[#FF6B6B]" />
          </div>
          <h3 className="font-semibold mb-2">Our Team</h3>
          <p className="text-sm text-[#A0A0A0]">
            A diverse team of AI engineers, screenwriters, and product designers from top studios.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mx-auto mb-4">
            <Globe className="w-6 h-6 text-[#6C63FF]" />
          </div>
          <h3 className="font-semibold mb-2">Global Reach</h3>
          <p className="text-sm text-[#A0A0A0]">
            Serving creators in 50+ countries with scripts optimized for international audiences.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#6C63FF]">50K+</div>
          <div className="text-sm text-[#A0A0A0] mt-1">Scripts Generated</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#6C63FF]">10K+</div>
          <div className="text-sm text-[#A0A0A0] mt-1">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#6C63FF]">50+</div>
          <div className="text-sm text-[#A0A0A0] mt-1">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#6C63FF]">4.8</div>
          <div className="text-sm text-[#A0A0A0] mt-1">User Rating</div>
        </div>
      </div>
    </div>
  );
}