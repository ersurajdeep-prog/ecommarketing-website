import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container text-center">
        <div className="trust-badge reveal">
          <span className="trust-dot"></span>
          Wyoming LLC &bull; EIN 61-2027757
        </div>
        <h1 className="heading-xl hero-title reveal reveal-delay-1">
          AI Agents that <span className="text-primary">Scale</span><br />
          Your E-commerce Store
        </h1>
        <p className="text-lg hero-subtitle reveal reveal-delay-2">
          Intelligent automation powered by Claude AI. Turn visitors into loyal customers automatically.
        </p>
        <div className="hero-cta reveal reveal-delay-3">
          <a href="#features" className="btn btn-primary hero-btn">Explore Features</a>
          <a href="#contact" className="btn btn-outline hero-btn">Get Started</a>
        </div>
      </div>
      
      {/* Background glowing effects */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
    </section>
  );
}
