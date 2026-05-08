import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out DramaAI',
    features: [
      '3 generations per day',
      'All genres available',
      'Basic script output',
      'Character profiles',
      'Story outlines',
    ],
    cta: 'Get Started',
    ctaLink: '/generator',
    highlighted: false,
  },
  {
    name: 'Pro Monthly',
    price: '$19.99',
    period: '/month',
    description: 'For serious content creators',
    features: [
      'Unlimited generations',
      'Priority AI processing',
      'Extended episode scripts (5+ episodes)',
      'Export to PDF & DOCX',
      'Custom character templates',
      'Priority email support',
    ],
    cta: 'Subscribe Now',
    ctaLink: '#',
    highlighted: true,
  },
  {
    name: 'Pro Annual',
    price: '$149.99',
    period: '/year',
    description: 'Best value — save 37%',
    features: [
      'Everything in Pro Monthly',
      'Early access to new features',
      'Team collaboration (coming soon)',
      'API access (coming soon)',
      'Dedicated account manager',
      'Priority support',
    ],
    cta: 'Subscribe Now',
    ctaLink: '#',
    highlighted: false,
  },
];

export default function Pricing() {
  const handleSubscribe = (planName: string) => {
    // Stripe payment integration placeholder
    // When Stripe is connected, this will create a checkout session
    alert(`Stripe payment integration coming soon for ${planName}. Please check back later.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 mb-6">
          <Sparkles className="w-4 h-4 text-[#6C63FF]" />
          <span className="text-sm text-[#6C63FF]">Pricing Plans</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Choose Your <span className="text-[#6C63FF]">Plan</span>
        </h1>
        <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
          Start free and upgrade when you need unlimited access to AI script generation.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-2xl border backdrop-blur-sm ${
              plan.highlighted
                ? 'border-[#6C63FF]/50 bg-[#1A1A2E]/80 shadow-lg shadow-[#6C63FF]/5'
                : 'border-white/5 bg-[#1A1A2E]/50'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6C63FF] text-xs font-medium text-white">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-sm text-[#A0A0A0] mb-4">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-[#A0A0A0] text-sm">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                  <Check className="w-4 h-4 text-[#6C63FF] mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {plan.ctaLink === '/generator' ? (
              <Link
                to={plan.ctaLink}
                className={`block text-center py-3 rounded-xl font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-[#6C63FF] hover:bg-[#5A52E0] text-white'
                    : 'border border-white/10 hover:border-[#6C63FF]/50 text-white'
                }`}
              >
                {plan.cta}
              </Link>
            ) : (
              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-3 rounded-xl font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-[#6C63FF] hover:bg-[#5A52E0] text-white'
                    : 'border border-white/10 hover:border-[#6C63FF]/50 text-white'
                }`}
              >
                {plan.cta}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-[#1A1A2E]/50 border border-white/5">
            <h3 className="font-medium mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#A0A0A0]">
              Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#1A1A2E]/50 border border-white/5">
            <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-sm text-[#A0A0A0]">
              We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processing.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#1A1A2E]/50 border border-white/5">
            <h3 className="font-medium mb-2">Is there a refund policy?</h3>
            <p className="text-sm text-[#A0A0A0]">
              We offer a 7-day money-back guarantee. If you're not satisfied, contact us within 7 days of purchase for a full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}