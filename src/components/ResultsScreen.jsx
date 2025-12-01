import React from 'react';
import { recommendations } from '../data/questions';

const ResultsScreen = ({ scores, onRestart }) => {
    // Determine the winner
    const winnerKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = recommendations[winnerKey];

    return (
        <div className="glass-panel fade-in" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ color: '#64748b', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                Your Perfect Match
            </h2>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                {result.title}
            </h1>

            <div style={{
                background: 'rgba(255, 255, 255, 0.4)',
                padding: '2rem',
                borderRadius: '1rem',
                marginBottom: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.6)'
            }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#334155' }}>
                    {result.description}
                </p>

                {/* Pro Tip for Budget users */}
                {result.note && (
                    <div style={{
                        background: 'rgba(14, 165, 233, 0.1)',
                        border: '1px solid rgba(14, 165, 233, 0.2)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        color: '#0369a1',
                        fontSize: '0.95rem',
                        textAlign: 'left'
                    }}>
                        {result.note}
                    </div>
                )}

                <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.05)', paddingTop: '1.5rem' }}>
                    <span style={{ color: '#64748b', display: 'block', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600' }}>RECOMMENDED MODELS</span>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem'
                    }}>
                        {result.examples.map((car, index) => (
                            <li key={index} style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '0.5rem',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s'
                            }}>
                                <a
                                    href={`https://www.google.com/search?q=${encodeURIComponent(car + " Australia review")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        padding: '0.8rem 1.2rem',
                                        color: '#0f172a',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        width: '100%',
                                        height: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                    onMouseEnter={(e) => e.target.parentElement.style.transform = 'translateX(5px)'}
                                    onMouseLeave={(e) => e.target.parentElement.style.transform = 'translateX(0)'}
                                >
                                    {car}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button className="btn-primary" onClick={onRestart} style={{ marginBottom: '3rem' }}>
                Take Quiz Again
            </button>

            {/* Useful Links Section */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '1rem' }}>Continue with</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://chat.electricvehicle.life"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}
                    >
                        EV Life EV Chat →
                    </a>

                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '1rem' }}>Other Useful Resources</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://electricvehiclecouncil.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}
                    >
                        Electric Vehicle Council
                    </a><br />
                    <a
                        href="https://www.aeva.asn.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}
                    >
                        Australian Electric Vehicle Association
                    </a>
                    <a
                        href="https://www.aaa.asn.au/research-data/electric-vehicle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}
                    >
                        AAA EV Research & Data
                    </a>

                    
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;
