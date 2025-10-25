import React from 'react'

function AnswerFeedback ({ isCorrect}) {
    
  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? 'Correct!' : 'Wrong!'}
    </div>
  )
}

export default AnswerFeedback