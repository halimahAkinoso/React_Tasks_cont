import React from 'react';

const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <div className="scoreboard">
      Score: {score} / {totalQuestions}
    </div>
  );
};

export default ScoreBoard;