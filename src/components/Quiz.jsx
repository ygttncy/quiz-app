/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreBoard, setShowScoreBoard] = useState(false);
  const [userName, setUserName] = useState(''); // Kullanıcı adını sakla
  const [isQuizStarted, setIsQuizStarted] = useState(false); // Quiz başlama durumu

  useEffect(() => {
    const quizQuestions = [
      { question: 'What is 2+2?', answers: ['3', '4', '5', '6'], correct: 1 },
      { question: 'Capital of France?', answers: ['Berlin', 'Paris', 'Rome', 'Madrid'], correct: 1 },
      { question: 'Largest planet in the solar system?', answers: ['Earth', 'Jupiter', 'Mars', 'Saturn'], correct: 1 },
      { question: 'Who wrote "Hamlet"?', answers: ['Shakespeare', 'Hemingway', 'Tolkien', 'Orwell'], correct: 0 },
      { question: 'Chemical symbol for water?', answers: ['H2O', 'O2', 'CO2', 'NaCl'], correct: 0 },
      { question: 'Which country is famous for tulips?', answers: ['France', 'Netherlands', 'Germany', 'Belgium'], correct: 1 },
      { question: 'Fastest land animal?', answers: ['Cheetah', 'Lion', 'Elephant', 'Kangaroo'], correct: 0 },
      { question: 'Who developed the theory of relativity?', answers: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'], correct: 1 },
      { question: 'Where is the Eiffel Tower located?', answers: ['New York', 'London', 'Paris', 'Berlin'], correct: 2 },
      { question: 'What is the speed of light?', answers: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'], correct: 0 },
    ];
    // Soruları karıştır
    setQuestions(quizQuestions.sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScoreBoard(true);
    }
  };

  const handleStartQuiz = () => {
    if (userName.trim()) {
      setIsQuizStarted(true); // Kullanıcı adı girildikten sonra quiz başlar
    }
  };

  return (
    <div className="quiz-container">
      {!isQuizStarted ? (
        <div className="start-container">
          <h2>Enter your name to start the quiz</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : (
        <div className="quiz-content">
          <div className="question-section">
            {showScoreBoard ? (
              <div className="completed-message">
                <h2>Quiz Completed!</h2>
                <ScoreBoard score={score} total={questions.length} />
              </div>
            ) : (
              <Question
                data={questions[currentQuestion]}
                handleAnswer={handleAnswer}
              />
            )}
          </div>
          <div className="score-section">
            {/* Sorular bitse de skor görünecek */}
            <ScoreBoard score={score} total={questions.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
