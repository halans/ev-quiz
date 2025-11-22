import React from 'react';

const ProgressBar = ({ current, total }) => {
    const progress = ((current + 1) / total) * 100;

    return (
        <div style={{ marginBottom: '2rem', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                <span>Question {current + 1} of {total}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #38bdf8, #c084fc)',
                    transition: 'width 0.5s ease-in-out',
                    borderRadius: '4px'
                }} />
            </div>
        </div>
    );
};

export default ProgressBar;
