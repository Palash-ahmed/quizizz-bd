import React from 'react';

const QuizOption = ({option}) => {
    return (
        <div>
            <input className='form-check-input' type="radio" name='flexRadio' id='flexRadioDefault1' />
            <label className='form-check-label' for="flexRadioDefault1">{option}</label>
        </div>
    );
};

export default QuizOption;