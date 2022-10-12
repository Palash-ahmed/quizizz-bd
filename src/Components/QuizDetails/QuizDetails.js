import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizizzBD from '../QuizizzBD/QuizizzBD';

const QuizDetails = () => {
    const quizDetailsLoaderData = useLoaderData();
    const quizLoad = quizDetailsLoaderData.data;
    const { id, name, questions } = quizLoad;
    return (
        <div>
            <h1 className="text-center text-red-500 font-bold text-4xl mt-3 mb-10">
                Quiz of: {name}
            </h1>
            <div>
                {questions.map((QuizizzBDData) => (
                    <QuizizzBD QuizizzBDData={QuizizzBDData} key={id}></QuizizzBD>
                ))}
            </div>
        </div>
    );
};

export default QuizDetails;
