import React from 'react';

const Question = ({ questionData, handleAnswer, answered, isCorrect }) => {
  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={answered}
            className={
              answered
                ? option === questionData.answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;