import './About.css';

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-content reveal">
          <h2 className="heading-lg about-heading">Pioneering the Future of E-commerce</h2>
          <p className="text-lg about-text">
            At Ecommarketing LLC, we believe the future of online retail is deeply intertwined with artificial intelligence. Our mission is to democratize enterprise-grade AI for e-commerce brands of all sizes. 
          </p>
          <p className="text-lg about-text">
            By leveraging advanced Large Language Models like Claude, we build custom marketing agents that act as a 24/7 autonomous growth team for your store—handling everything from personalized copywriting to predictive analytics.
          </p>
          
          <div className="about-stats">
            <div className="stat-item reveal reveal-delay-1">
              <h4 className="stat-value text-primary">24/7</h4>
              <p className="stat-label">Autonomous Operation</p>
            </div>
            <div className="stat-item reveal reveal-delay-2">
              <h4 className="stat-value text-primary">10x</h4>
              <p className="stat-label">Conversion Potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
