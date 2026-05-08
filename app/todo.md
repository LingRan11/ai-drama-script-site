# AI Short Drama Script Generator - Development Plan

## Design
- **Style**: Minimalist, premium, dark theme with accent gradients
- **Color Palette**: #0F0F0F (bg), #1A1A2E (card bg), #6C63FF (primary purple), #FF6B6B (accent red), #F8F8F8 (text), #A0A0A0 (muted text)
- **Typography**: Inter for body, space-grotesk for headings
- **Key Styles**: Glass-morphism cards, subtle gradient borders, smooth animations, responsive mobile-first

## Images to Generate
1. hero-banner-ai-script-writing.jpg - Cinematic hero banner showing AI-powered script writing concept with glowing text and dramatic lighting (1024x576)
2. feature-genre-selection.jpg - Abstract artistic representation of drama genres with cinematic elements (1024x576)
3. feature-ai-generation.jpg - Futuristic AI brain generating creative content with light particles (1024x576)
4. pricing-premium-bg.jpg - Dark elegant abstract background with purple gradient for pricing section (1024x576)

## Development Tasks
- [x] Create todo.md and generate images
- [x] Set up project structure: App.tsx routing, layout components
- [x] Build Homepage (Index.tsx) - Hero, Features, Use Cases, Pricing sections
- [x] Build Script Generator page - Genre selection, keyword input, AI generation with streaming output
- [x] Build Pricing/Membership page - Monthly/Annual plans with Stripe placeholder
- [x] Build static pages - About, Contact, Privacy Policy
- [x] Implement free usage limit (3/day via localStorage) with upgrade modal
- [x] Final lint, build, and UI check