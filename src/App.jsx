import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultsScreen from './components/ResultsScreen';
import { questions } from './data/questions';

function App() {
  const [gameState, setGameState] = useState('welcome'); // welcome, playing, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    city: 0,
    sedan: 0,
    suv: 0,
    luxury: 0,
    performance: 0,
    budget: 0,
    range: 0
  });

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScores({
      city: 0,
      sedan: 0,
      suv: 0,
      luxury: 0,
      performance: 0,
      budget: 0,
      range: 0
    });
  };

  const handleAnswer = (scoreImpact) => {
    // Update scores
    const newScores = { ...scores };
    Object.keys(scoreImpact).forEach(key => {
      if (newScores[key] !== undefined) {
        newScores[key] += scoreImpact[key];
      }
    });
    setScores(newScores);

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('results');
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img
        src="/ev-life_tr.png"
        alt="EV Life Logo"
        style={{ height: '60px', marginBottom: '1rem', marginTop: '1rem' }}
      />
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {gameState === 'playing' && (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <ProgressBar current={currentQuestionIndex} total={questions.length} />
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {gameState === 'results' && (
        <ResultsScreen scores={scores} onRestart={handleStart} />
      )}
    </div>
  );
}

export default App;
