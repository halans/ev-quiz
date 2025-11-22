import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
    return (
        <div className="glass-panel fade-in" style={{ width: '100%' }}>
            <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: 'var(--text-color)'
            }}>
                {question.text}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onAnswer(option.score)}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '1.2rem',
                            borderRadius: '1rem',
                            color: 'var(--text-color)',
                            textAlign: 'left',
                            fontSize: '1.1rem',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                            e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateX(0)';
                        }}
                    >
                        {option.text}
                        <span style={{ opacity: 0.5 }}>→</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
