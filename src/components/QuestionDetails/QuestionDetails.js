import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuestionDetails = () => {
    const topic = useLoaderData().data;
    const { name, questions} =topic;
    console.log(topic);
    return (
        <div>
            <h2>Quiz topic on {name}</h2>
            <h4>On {topic.name} topics we have total {questions.length} Topics</h4>
            {
                questions.map(quiz => <Quiz
                    key = {quiz.id}
                    quiz = {quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default QuestionDetails;