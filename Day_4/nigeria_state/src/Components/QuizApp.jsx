// import React from 'react'
import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import AnswerFeedback from './AnswerFeedback';


const quizData = [
  {
    question: "What is the capital of Lagos State?",
    options: ["Ikeja", "Lagos City", "Eko", "Badagry"],
    answer: "Ikeja",
  },
  {
    question: "What is the capital of Oyo State?",
    options: ["Ibadan", "Ogbomosho", "Iseyin", "Shaki"],
    answer: "Ibadan",
  },
  {
    question: "What is the capital of Kano State?",
    options: ["Kano City", "Wudil", "Gaya", "Dawakin Kudu"],
    answer: "Kano City",
  },
  {
    question: "What is the capital of Rivers State?",
    options: ["Port Harcourt", "Bonny", "Ahoada", "Okrika"],
    answer: "Port Harcourt",
  },
  {
    question: "What is the capital of Kaduna State?",
    options: ["Zaria", "Kaduna", "Kafanchan", "Soba"],
    answer: "Kaduna",
  },
];

function QuizApp () {

    // const questions = [
    //     {questionText: 'What is the capital of Lagos?', answerOptions: 
    //     [
    //         { answerText: 'Ikeja', isCorrect: true }, 
    //         { answerText: 'Lagos', isCorrect: false}]}, 
    //     // to add more questions 
    //     {questionText: 'Port Harcourt is the capital of which state?', answerOptions: 
    //     [{ answerText: 'Rivers', isCorrect: true }, { answerText: 'Lagos', isCorrect: false}, { answerText: 'Bayelsa', isCorrect: false}]},

    //     {questionText: 'The capital of Oyo State is ____', answerOptions: 
    //     [{ answerText: 'Ibadan', isCorrect: true }, { answerText: 'Ilorin', isCorrect: false}]},

    //     {questionText: 'Benin City is the capital of —', answerOptions: 
    //     [{ answerText: 'Edo State', isCorrect: true }, { answerText: 'Ondo State', isCorrect: false}]},

    //     {questionText: 'Yenagoa is the capital of —', answerOptions: 
    //     [{ answerText: 'Bayelsa State', isCorrect: true }, { answerText: 'Akwa Ibom State', isCorrect: false}]}
    // ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (answered) return;

    const isCorrectAnswer = selectedOption === quizData[currentQuestionIndex].answer;
    setIsCorrect(isCorrectAnswer);
    setAnswered(true);

    if (isCorrectAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setAnswered(false);
      setIsCorrect(null);
    } else {
      setShowFinalScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(null);
    setShowFinalScore(false);
  };

  return (
    <div className="quiz-app">
      <h1>Nigerian States Quiz</h1>
      {showFinalScore ? (
        <div>
          <ScoreBoard score={score} totalQuestions={quizData.length} />
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <ScoreBoard score={score} totalQuestions={quizData.length} />
          <Question
            questionData={quizData[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            answered={answered}
            isCorrect={isCorrect}
          />
          {answered && (
            <>
              <AnswerFeedback isCorrect={isCorrect} />
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex === quizData.length - 1 ? 'Show Final Score' : 'Next Question'}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuizApp;
