export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-[#A0A0A0] mb-8">Last updated: May 8, 2026</p>

      <div className="space-y-8 text-[#A0A0A0] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            DramaAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
            Policy explains how we collect, use, disclose, and safeguard your information when you 
            use our AI script generation service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email address, name) when you create an account</li>
            <li>Usage data (scripts generated, genres selected, keywords used)</li>
            <li>Payment information processed securely through Stripe</li>
            <li>Device and browser information for analytics purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our script generation service</li>
            <li>To process payments and manage subscriptions</li>
            <li>To improve our AI models and service quality</li>
            <li>To communicate with you about updates and offers</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. 
            All data is encrypted in transit and at rest. Payment processing is handled by Stripe, 
            a PCI-compliant payment processor.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
          <p>
            We use essential cookies to maintain your session and preferences. We also use 
            analytics cookies to understand how our service is used. You can control cookie 
            settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Third-Party Services</h2>
          <p>
            We use third-party services including Stripe for payments and AI providers for 
            script generation. These services have their own privacy policies governing the 
            use of your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@dramaai.com" className="text-[#6C63FF] hover:underline">
              privacy@dramaai.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}