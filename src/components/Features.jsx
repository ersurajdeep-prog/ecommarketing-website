import './Features.css';

const featuresData = [
  {
    title: "Claude-Powered AI Marketing Agents",
    description: "Deploy intelligent agents that understand context, craft compelling copy, and engage customers exactly like a human expert would.",
    icon: "🧠"
  },
  {
    title: "Smart Conversion Optimization",
    description: "Automatically test and optimize your product pages and funnels to maximize conversion rates using real-time data.",
    icon: "📈"
  },
  {
    title: "Predictive Analytics & Automation",
    description: "Anticipate customer needs and automate entire marketing workflows before the trends even happen.",
    icon: "⚡"
  },
  {
    title: "Personalized Customer Experiences",
    description: "Deliver hyper-personalized shopping journeys that make every customer feel like a VIP.",
    icon: "✨"
  }
];

export default function Features() {
  return (
    <section className="features section-padding" id="features">
      <div className="container">
        <div className="text-center reveal">
          <h2 className="heading-lg features-heading">Why Choose Us?</h2>
          <p className="text-lg features-subheading">State-of-the-art tools designed for modern growth.</p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="heading-md feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
