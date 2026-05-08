import { useState, useRef } from 'react';
import { Sparkles, Loader2, Crown, Film, Flame, Heart, Search } from 'lucide-react';
import { client } from '@/lib/api';
import { canGenerate, incrementUsage, getRemainingCount } from '@/lib/usage';

const genres = [
  { id: 'rich', label: 'Romance of the Rich', icon: Crown, description: 'Luxury, power struggles, forbidden love' },
  { id: 'revenge', label: 'Revenge', icon: Flame, description: 'Betrayal, justice, dramatic twists' },
  { id: 'love', label: 'Love', icon: Heart, description: 'Romance, heartbreak, happy endings' },
  { id: 'suspense', label: 'Suspense', icon: Search, description: 'Mystery, thriller, unexpected reveals' },
];

export default function Generator() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [keywords, setKeywords] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!selectedGenre) return;
    if (!keywords.trim()) return;

    if (!canGenerate()) {
      setShowUpgradeModal(true);
      return;
    }

    setIsGenerating(true);
    setOutput('');

    const genreLabel = genres.find(g => g.id === selectedGenre)?.label || selectedGenre;

    const systemPrompt = `You are a professional short drama screenwriter specializing in ${genreLabel} genre scripts for short-form video platforms. Generate content in English that is engaging, dramatic, and production-ready.

When given a theme/keywords, generate:
1. **CHARACTER PROFILES** - 3-5 main characters with names, ages, backgrounds, motivations
2. **STORY OUTLINE** - A compelling 5-episode arc with major plot points
3. **FULL EPISODE SCRIPTS** - Complete scripts for Episodes 1-3 with:
   - Scene descriptions
   - Character dialogue
   - Stage directions
   - Emotional beats
   - Cliffhanger endings

Format the output clearly with headers and proper screenplay formatting.`;

    const userPrompt = `Genre: ${genreLabel}
Theme/Keywords: ${keywords}

Please generate a complete short drama package including character profiles, story outline, and full episode scripts (Episodes 1-3).`;

    try {
      await client.ai.gentxt({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        model: 'deepseek-v3.2',
        stream: true,
        onChunk: (chunk) => {
          if (chunk.content) {
            setOutput(prev => prev + chunk.content);
            if (outputRef.current) {
              outputRef.current.scrollTop = outputRef.current.scrollHeight;
            }
          }
        },
        onComplete: () => {
          setIsGenerating(false);
          incrementUsage();
        },
        onError: (error) => {
          setIsGenerating(false);
          setOutput(`Error: ${error.message || 'Failed to generate script. Please try again.'}`);
        },
        timeout: 120000,
      });
    } catch (error: any) {
      setIsGenerating(false);
      setOutput(`Error: ${error?.message || 'Failed to generate script. Please try again.'}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          AI Script <span className="text-[#6C63FF]">Generator</span>
        </h1>
        <p className="text-[#A0A0A0]">
          Select a genre, enter your keywords, and let AI create your script
        </p>
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A2E] border border-white/5 text-sm">
          <Sparkles className="w-4 h-4 text-[#6C63FF]" />
          <span className="text-[#A0A0A0]">
            {getRemainingCount()} free generation{getRemainingCount() !== 1 ? 's' : ''} remaining today
          </span>
        </div>
      </div>

      {/* Genre Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3">Select Genre</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedGenre === genre.id
                    ? 'border-[#6C63FF] bg-[#6C63FF]/10'
                    : 'border-white/5 bg-[#1A1A2E]/50 hover:border-white/20'
                }`}
              >
                <Icon className={`w-6 h-6 mb-2 ${selectedGenre === genre.id ? 'text-[#6C63FF]' : 'text-[#A0A0A0]'}`} />
                <h3 className="font-medium text-sm mb-1">{genre.label}</h3>
                <p className="text-xs text-[#A0A0A0]">{genre.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Keywords Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3">Theme Keywords</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., CEO falls for his secretary, hidden identity, family secret..."
            className="flex-1 px-4 py-3 rounded-xl bg-[#1A1A2E] border border-white/5 focus:border-[#6C63FF] focus:outline-none text-sm placeholder-[#A0A0A0]/50 transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !selectedGenre || !keywords.trim()}
            className="px-6 py-3 rounded-xl bg-[#6C63FF] hover:bg-[#5A52E0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-all flex items-center gap-2 whitespace-nowrap"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Generate
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Area */}
      {(output || isGenerating) && (
        <div className="mb-8">
          <label className="block text-sm font-medium mb-3">Generated Script</label>
          <div
            ref={outputRef}
            className="p-6 rounded-xl bg-[#1A1A2E]/80 border border-white/5 min-h-[400px] max-h-[600px] overflow-y-auto"
          >
            {output ? (
              <pre className="whitespace-pre-wrap text-sm text-[#E0E0E0] font-mono leading-relaxed">
                {output}
              </pre>
            ) : (
              <div className="flex items-center gap-3 text-[#A0A0A0]">
                <Loader2 className="w-5 h-5 animate-spin text-[#6C63FF]" />
                <span className="text-sm">AI is crafting your script...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A2E] rounded-2xl border border-white/10 p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#6C63FF]/10 flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-[#6C63FF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Daily Limit Reached</h3>
              <p className="text-sm text-[#A0A0A0] mb-6">
                You've used all 3 free generations for today. Upgrade to Pro for unlimited access.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/pricing"
                  className="block py-3 rounded-xl bg-[#6C63FF] hover:bg-[#5A52E0] text-white font-medium transition-colors"
                >
                  Upgrade to Pro
                </a>
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="py-3 rounded-xl border border-white/10 text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}