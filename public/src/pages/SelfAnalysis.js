import React, { useState } from 'react';

const MentalHealthScorecard = () => {
  const [scores, setScores] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    // Add more questions and scores as needed
  });

  // Define the questions and their corresponding descriptions
  const questions = [
    {
      id: 'question1',
      text: 'Is the website content informative and easy to understand?',
    },
    {
      id: 'question2',
      text: 'Does the website provide useful resources and tips for mental health?',
    },
    {
      id: 'question3',
      text: 'Is the website easy to navigate and user-friendly?',
    },
    // Add more questions and descriptions as needed
  ];

  // Function to update the score for a specific question
  const updateScore = (questionId, score) => {
    setScores({ ...scores, [questionId]: score });
  };

  // Function to calculate the total score
  const calculateTotalScore = () => {
    let total = 0;
    for (const key in scores) {
      total += scores[key];
    }
    return total;
  };

  return (
    <div className="mental-health-scorecard">
      <h2>Mental Health Website Self-Analysis</h2>
      <p>Rate each question from 1 to 5, with 1 being the lowest and 5 being the highest.</p>
      <form>
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p>{question.text}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((score) => (
                <label key={score}>
                  <input
                    type="radio"
                    name={question.id}
                    value={score}
                    onChange={() => updateScore(question.id, score)}
                    checked={scores[question.id] === score}
                  />
                  {score}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      <div className="total-score">
        <p>Total Score: {calculateTotalScore()}</p>
      </div>
    </div>
  );
};

export default MentalHealthScorecard;
