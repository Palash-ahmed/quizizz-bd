import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './Quiz.css'
// import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({quiz}) => {
    const {options, question} = quiz
    return (
        <div className='quiz-container'>
            <div className='questions-eye'>
                <h3 className='heading'>{question}</h3>
            </div>
            <div className='option-container'>
                {
                    options.map((option, index) => <QuizOption
                        key = {index}
                        option = {option}
                    ></QuizOption>)
                }
            </div>
            {/* <h1>{question}</h1>
            {
                options.map(option => <QuizOption
                    key = {option.id}
                    option = {option}
                ></QuizOption>)
            } */}
            
        </div>
    );
};

export default Quiz;