import { Link } from 'react-router-dom';
import { Sparkles, Zap, Film, Users, ArrowRight, Check } from 'lucide-react';

export default function Index() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1203496/2026-05-08/od5oj5yaagnq/hero-banner-ai-script-writing.png"
            alt="AI Script Writing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/60 via-[#0F0F0F]/80 to-[#0F0F0F]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#6C63FF]" />
              <span className="text-sm text-[#6C63FF]">AI-Powered Script Generation</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Create Compelling{' '}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
                Short Drama Scripts
              </span>{' '}
              in Seconds
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
              Generate professional-quality character profiles, story outlines, and full episode 
              scripts with AI. Perfect for content creators, screenwriters, and studios.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/generator"
                className="px-8 py-4 rounded-xl bg-[#6C63FF] hover:bg-[#5A52E0] text-white font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                Start Creating <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-[#6C63FF]/50 text-white font-semibold text-lg transition-all"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#A0A0A0]">
              ✨ 3 free generations per day — no sign-up required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Write{' '}
              <span className="text-[#6C63FF]">Hit Scripts</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Our AI understands dramatic structure, character arcs, and audience engagement 
              to deliver scripts that captivate viewers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 hover:border-[#6C63FF]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mb-4">
                <Film className="w-6 h-6 text-[#6C63FF]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Genres</h3>
              <p className="text-sm text-[#A0A0A0]">
                Choose from Romance of the Rich, Revenge, Love, or Suspense — each with 
                genre-specific tropes and plot structures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 hover:border-[#6C63FF]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#FF6B6B]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Generation</h3>
              <p className="text-sm text-[#A0A0A0]">
                Get complete character profiles, story outlines, and multi-episode scripts 
                generated in real-time with streaming AI.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 hover:border-[#6C63FF]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#6C63FF]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
              <p className="text-sm text-[#A0A0A0]">
                Scripts formatted for production with scene descriptions, dialogue, 
                and stage directions ready for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#A0A0A0] text-lg">Three simple steps to your next hit script</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#6C63FF]">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Genre</h3>
              <p className="text-sm text-[#A0A0A0]">
                Select from our curated genre options tailored for short-form drama content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#6C63FF]">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enter Keywords</h3>
              <p className="text-sm text-[#A0A0A0]">
                Describe your story concept with keywords to guide the AI's creative direction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#6C63FF]">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Generate Script</h3>
              <p className="text-sm text-[#A0A0A0]">
                AI generates characters, outline, and full episode scripts instantly.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6C63FF] hover:bg-[#5A52E0] text-white font-semibold transition-all hover:scale-105"
            >
              Try It Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For Creators</h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Whether you're an independent creator or a production studio, DramaAI accelerates your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">📱 Short-Form Content Creators</h3>
              <p className="text-sm text-[#A0A0A0]">
                Generate binge-worthy scripts for TikTok, YouTube Shorts, and Reels drama series.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">🎬 Production Studios</h3>
              <p className="text-sm text-[#A0A0A0]">
                Rapidly prototype storylines and test concepts before committing to full production.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">✍️ Screenwriters</h3>
              <p className="text-sm text-[#A0A0A0]">
                Overcome writer's block and generate fresh ideas with AI-assisted brainstorming.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">🌍 Global Platforms</h3>
              <p className="text-sm text-[#A0A0A0]">
                Create localized content for international audiences with culturally-aware scripts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1203496/2026-05-08/od5ojdqaagqa/pricing-premium-bg.png"
            alt="Pricing Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0F0F0F]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[#A0A0A0] text-lg">Start free, upgrade when you need more</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/80 border border-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-[#A0A0A0] text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> 3 generations per day
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> All genres available
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Basic script output
                </li>
              </ul>
              <Link
                to="/generator"
                className="block text-center py-3 rounded-lg border border-white/10 text-sm font-medium hover:border-[#6C63FF]/50 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Monthly */}
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/80 border border-[#6C63FF]/30 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#6C63FF] text-xs font-medium text-white">
                Popular
              </div>
              <h3 className="text-lg font-semibold mb-2">Pro Monthly</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-[#A0A0A0] text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Unlimited generations
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Priority AI processing
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Extended episode scripts
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Export to PDF
                </li>
              </ul>
              <Link
                to="/pricing"
                className="block text-center py-3 rounded-lg bg-[#6C63FF] hover:bg-[#5A52E0] text-sm font-medium text-white transition-colors"
              >
                Subscribe Now
              </Link>
            </div>

            {/* Annual */}
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/80 border border-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">Pro Annual</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$149.99</span>
                <span className="text-[#A0A0A0] text-sm">/year</span>
              </div>
              <p className="text-xs text-[#6C63FF] mb-4">Save 37% vs monthly</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Everything in Pro
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Early access features
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF]" /> Priority support
                </li>
              </ul>
              <Link
                to="/pricing"
                className="block text-center py-3 rounded-lg border border-white/10 text-sm font-medium hover:border-[#6C63FF]/50 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}