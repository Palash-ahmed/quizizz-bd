import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz)
    const {options, question, correctAnswer} = quiz
    return (
        <div>
            <h1>{question}</h1>
            <p>{options}{correctAnswer}</p>
            
        </div>
    );
};

export default Quiz;