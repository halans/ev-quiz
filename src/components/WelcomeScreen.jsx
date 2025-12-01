import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="fade-in" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Hero Section */}
            <div style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '4rem 0 6rem 0',
                padding: '0 1rem'
            }}>

                <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'rgba(14, 165, 233, 0.1)',
                    color: 'var(--primary-color)',
                    borderRadius: '2rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                }}>
                    EV Life - EV Matchmaker
                </div>
                <h1 style={{
                    fontSize: '4rem',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    color: '#0f172a',
                    fontWeight: '800',
                    letterSpacing: '-0.02em'
                }}>
                    Find Your Perfect <br />
                    <span className="text-gradient">Electric Vehicle</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    marginBottom: '3rem',
                    color: '#64748b',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Stop guessing. Take our 30-second quiz to discover the best EV for your lifestyle, budget, and Aussie driving needs.
                </p>
                <button className="btn-primary" onClick={onStart} style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
                    Start the Quiz
                </button>
            </div>

            {/* Features Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px',
                marginBottom: '6rem'
            }}>
                <FeatureCard
                    icon="⏱️"
                    title="Save Time on Research"
                    desc="We've analyzed the specs so you don't have to. Get instant recommendations based on data."
                />
                <FeatureCard
                    icon="🦘"
                    title="Made for Australia"
                    desc="Curated for the local market. We factor in real-world range, local pricing, and availability."
                />
                <FeatureCard
                    icon="⚖️"
                    title="100% Unbiased"
                    desc="Our goal is to help you find the car that fits your life, free from sales pitches."
                />
            </div>

            {/* Footer */}
            <footer style={{
                marginTop: 'auto',
                padding: '2rem',
                color: '#94a3b8',
                fontSize: '0.9rem',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                width: '100%',
                textAlign: 'center'
            }}>
                <p>
                    &copy; 2025 <a href="https://electricvehicle.life" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>EV Life</a> - EV Matchmaker - <a href="https://chat.electricvehicle.life" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>EV Chat</a>.
                </p>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="glass-panel" style={{ textAlign: 'left', padding: '2.5rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: '700' }}>{title}</h3>
        <p style={{ color: '#64748b', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

export default WelcomeScreen;
